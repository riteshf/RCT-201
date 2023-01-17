### [Cypress.io: https://www.cypress.io/](https://www.cypress.io/)

It is used to do both component testing and E2E testing, we will be focusing on E2E testing.

- We will be testing End-2-End Workflows using cypress.

### [Getting Started](https://docs.cypress.io/guides/getting-started/installing-cypress#What-you-ll-learn)

1. `cd boil`
2. `npm i cypress@latest -D`
3.
4. [`npx cypress open`](https://docs.cypress.io/guides/getting-started/opening-the-app)
5. This is open a browser interface, select following
   1. Click on `E2E Testing`.
   2. Click on `continue` button.
   3. Choose your browser: `Chrome`, then click on `Start E2E testing on Chrome`.
   4. Create a new test
6. This will create a `cypress.json` file and a cypress fodler.

### First test

We can write our first test

- **Note**: Keep your app runing on `locathost:3000`

```js
describe.only("empty spec", () => {
  it("passes", () => {
    cy.visit("localhost:3000");
  });
});
```

References:

- visit - https://docs.cypress.io/api/commands/visit.html#Syntax

### Working with input tags

Now lets look at the input tags. and we want a basic form that on load, should focus on the input.

we can have a class identifier on the input tag and check what item is focused after logging in

```javascript
describe("Input form", () => {
  it("type in input box", () => {
    // this is an example test description
    // it is similar to how you wrote test in jest
    cy.visit("http://localhost:3000"); // make sure its the same url of your application

    cy.get('[data-testid="todo-input"]')
      .focus()
      .type(text)
      .should("have.value", text);
    // finding an element with data-testid and typing in it.
  });
});
```

lets add another test to check the value of the input tag

we can use `it.only` to run that test

```javascript
it.only("input tag field", () => {
  //remove only once you are done testing
  cy.visit("http://localhost:3000");
  const text = "BUY BREAD";
  cy.get('[data-testid="todo-input"]').focus().type("bbb").type("{enter}");
});
```

if you add state variable to the value of the input with the change handler, you will get an error message when you run the test suite

You can see that cy.visit is being called again, and its duplicate logic.

we can run a beforeEach on all the test cases

```javascript
describe("Input form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    // add a cy visit in beforeEach test
    //  we can add a baseUrl in the cypress.json to make it
    // easier to work with for entire application
  });
  it("visit home page", () => {
    cy.focused().should("have.class", ".todo-input");
  });

  it("input tag field", () => {
    const text = "BUY BREAD";
    cy.get(".task-input").type(text).should("have.value", text);
  });
});
```

we can even make it better by adding a baseUrl in the cypress.json

```json
{
  "baseUrl": "http://localhost:3000"
}
```

with this in place your whole application will use the baseUrl

we can modify the visit request to the route now

```javascript
cy.visit("/");
```

References:

- focused - https://docs.cypress.io/api/commands/focused.html#Syntax
- should - https://docs.cypress.io/api/commands/should.html
- get - https://docs.cypress.io/api/commands/get.html
- type - https://docs.cypress.io/api/commands/type.html

### Working with forms and XHR requests

You can also enter (mock a keyboard enter) and click on buttons with cypress.

```javascript
it("Add a new item on submit of form", () => {
  cy.get(".task-input").type("BUY MILK").type("{enter}"); // wrap it around curly braces
});
// if you do not have a preventDefault behavior then it will trigger a refresh, which
// will be logged on cypress test suite
```

- We will create a network request for making the task application with axios for making a post request.
- now even though our server does not work, we can mock it in cypress.
- make sure that you add the response to your state

```javascript
const addData = (data) => {
  return axios.post("localhost:3000/api/task", data);
};

handleSubmit = (e) => {
  e.preventDefault();
  const item = { title: this.state.newItem, completed: false };
  addData(item).then(({ data }) =>
    this.setState({ tasks: [...this.state.tasks, data] })
  );
};
```

at this point if you run the test suite

```javascript
it("Add a new item on submit of form", () => {
  const text = "BUY MILK";
  cy.server(); // create a server
  cy.route(
    "POST", // method
    "/api/task", // url
    {
      // response
      title: text,
      id: 1,
      completed: false,
    }
  );
  cy.get(".task-input").type(text).type("{enter}"); // wrap it around curly braces
  // now cypress will respond with information that we provided earlier
  cy.get(".task-list li") //
    .should("have.length", 1)
    .and("contain", text);
});
```

lets add another test case to see what happens when the request fails.

```javascript
handleSubmit = (e) => {
  e.preventDefault();
  const item = { title: this.state.newItem, completed: false };
  addData(item)
    .then(({ data }) => this.setState({ tasks: [...this.state.tasks, data] }))
    // lets add a .catch to handle the error
    .catch((err) => this.setState({ error: true }));
};
```

```javascript
it("error message when adding a new item on submit of form", () => {
  const text = "BUY MILK";
  cy.server(); // create a server
  cy.route({
    // we can also pass a configuration or options into the route method
    url: "/api/task", // url
    status: 500, // status code
    method: "POST", // method
    response: {}, // empty response
  });
  cy.get(".task-input").type(text).type("{enter}"); // wrap it around curly braces

  // now cypress will respond with the 500 error response

  cy.get(".task-list li") //
    .should("not.exist"); // there should not be any task created

  cy.get(".error").should("be.visible");
});
```

References:

- server - https://docs.cypress.io/api/commands/server.html
- route - https://docs.cypress.io/api/commands/route.html
- and - https://docs.cypress.io/api/commands/and.html
- route - options - https://docs.cypress.io/api/commands/route.html#Options

### Mocking data with fixtures

We can load initial data for our application. We can also mock this, by using Fixtures in cypress.

so lets write an axios call for that

```javascript
// in utils
const loadData = () => axios.get('http:localhost:3030/api/tasks')

// in component
componentDidMount(){
    loadData.then( {data} => this.setState( tasks: {data}) )
}

// in test file
const tasks = [
    {
        title: 'BUY BREAD',
        id: 1,
        completed: false
    },
    {
        title: 'BUY MILK',
        id: 2,
        completed: false
    },
    {
        title: 'BUY TOMATOES',
        id: 3,
        completed: false
    },
 ]

describe('App initialize',()=>{
    it('load tasks on loading page', ()=>{
        cy.server()
        cy.route('GET', '/api/tasks/', tasks )
        cy.visit('/')

        cy.get('.task-list li')
            .should('have.length', 3)

    })
})

```

we can move the tasks to the `fixtures` folder, and call it `tasks.json`

tasks.json

```json
[
  {
    "title": "BUY BREAD",
    "id": 1,
    "completed": false
  },
  {
    "title": "BUY MILK",
    "id": 2,
    "completed": false
  },
  {
    "title": "BUY TOMATOES",
    "id": 3,
    "completed": false
  }
]
```

we can now use this fixture in any of our tests

```javascript
cy.route("GET", "/api/tasks/", "fixture:tasks");
```

References:

- [fixture](https://docs.cypress.io/api/commands/fixture)
