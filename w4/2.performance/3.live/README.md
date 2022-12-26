## What is Memoization?

- Memoization is a speed optimization technique in programming, given a function, you return a cached version of the output if the same inputs are used.
- A Memorized function remembers the results of output for a given t of inputs.
- In React we can memorize

  - component.
  - function.
  - or just a regular component value/variable.

- By Default React does a Shallow comparison of variables/props/functions, if react sees that a reference to a variable has been changed, react will re-render that element.

## Component Memoization

When we memoize a Component, we have to make sure that we avoid shallow comparison.

- `Note`: Memoization is not free, we trade for Space to save time.

## Topics:

- useMemo
- memo
- useCallback
