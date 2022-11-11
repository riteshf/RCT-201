### Create a React Typescript Project

- `npx create-react-app lec --template typescript`

Typescript is a general purpose language. Just like JavaScript is used in both frontend and backend, and typescript is just superset of javascript, typescript can also be using in both frontend and backend. The use cases in frontend can be quiet tricky because of many reasons

- the data is not always same
- there's no guarantee of data returned from a network request
- unexpected inputs from users etc

To overcome this, earlier there used to be basic types of validations before submitting the request like

- Regular expressions
- Sanity checking of data (eg: mobile number is at least 10 digit long) etc

but that doesn't stop you from making mistakes in writting code. When you are going to receive the data from the network you will still not know what you are going to recieve until you check network response yourself manually.

This also applies in case of hooks.
eg:

```js
const [data, setData] = useState();
```

or while passing props

```jsx
<Todos item={data}>
```

Here there's no way of knowing what `data` is going to hold. This is where Typescript helps you.

Typescripts job in UI is not only stopping you from making mistakes but also giving the complete picture of what everything will look like. If we just create a simple `type` or `interface`

```ts
type Todo = {
  id: number;
  title: string;
  status: boolean;
};
```

now we can use this type anywhere

```ts
const [data, setData] = useState<Todo>();
```

or in component

```tsx
type TodoProps = {
  id: number;
  title: string;
  status: boolean;
};

export const Todo = (props: TodoProps) => {
  // Use them
};
```
