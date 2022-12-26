# Getting Started

1. Create a React Project
2. Create an `useCounter` component that gives

   - Method signature

   ```js
   const { count, increment, decrement } = useCounter(initialValue);
   ```

   - count : number value.
   - increment : Function that takes number as argument, default 1. used to increment the count.
   - decrement : Function that takes number as argument, default 1. used to decrement the count.

3. use this hooks in more then 3 components to increment and decrement the values.

   - Component 1: increment/decrement by 1
   - Component 2: increment by 2/decrement by 3
   - Component 1: increment by -5/decrement by from an input element.

4. (Bonus) if able to use typescript with this example.
