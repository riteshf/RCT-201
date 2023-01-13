
const getTodos = [{ "value": "A", "isCompleted": true,  "id": 1}]
const postTodo = { id:2, value: "Swarup", isCompleted: false, } // checkbox not checked
describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('http://localhost:3000')
    cy.intercept("GET", "http://localhost:4004/todos",getTodos).as("getTodos")
  })


  it("Should render all HTML elements",()=>{
    cy.get("[data-testid=todo-input]")
    cy.get("[data-testid=todo-button]")
  })
  it("Todos from API responce should be their on DOM",()=>{
    // cy.intercept("GET", "http://localhost:4004/todos",getTodos).as("getTodos")
    
    cy.wait("@getTodos")
    
    cy.get("[data-testid=todo-item-value]").eq(0).should("contain", getTodos[0].value)

    cy.get("[data-testid=todo-item-checkbox]").eq(0).should("be.checked")
  })
  
  it("Should allows to add Todo",()=>{
  // it.only("Should allows to add Todo",()=>{ // only 1 testcase runs
    cy.intercept("POST", "http://localhost:4004/todos",postTodo).as("postTodos")
    
    cy.get("[data-testid=todo-input]").type(postTodo.value)
    
    cy.get("[data-testid=todo-button]").click()

    cy.wait("@postTodos")
    
    cy.get("[data-testid=todo-item-value]").eq(-1).should("contain", postTodo.value)

    cy.get("[data-testid=todo-item-checkbox]").eq(-1).should("not.be.checked")
  })
  
})