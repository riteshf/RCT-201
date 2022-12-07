## Task

Create an app where on the app component keep a timer with state on that which will increment every one second

- the timer state should be in the app component
- create an input tag to accept a post title and body
- on adding, create a new post as a list
- it should have a verifyPost key as false by default

```JavaScript
{
   id:
   title:
   body:
   verifyPost: false
}
```

- user can toggle the verifyPost state with a button on the child
- in each of the components, add a delay function, which will synchronously wait for the delay and return a random colour
- the post should have a box on the left with a random color,
- use `React.memo`, `useCallback`, `useMemo` to apply memoisation
- the colours should not change on every state change
- basically performance optimisation
  ![v2FFbOP.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-08-05/v2FFbOP_361836.png)
