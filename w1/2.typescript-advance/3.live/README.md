## [ENUM](https://www.typescriptlang.org/docs/handbook/enums.html)

Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

```ts
// Numeric enums
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

let up = Direction1.Up; // 0
let down = Direction1.Down; // 1
```

## [Tuple](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#tuple-destructuring)

```ts
// Array with exact 2 elements
let a: [string, string] = ["Hi", "Bye"];

// 2 D array
let arr: Array<[number, number]> = [
  [1, 1],
  [2, 2],
];
```

## [keyof](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”:

```ts
type Person = { name: string; lastName: string };
let person1: Person = { name: "Ritesh", lastName: "Firodiya" };

type P = keyof Person;
// P can be `name` or `lastName` i.e. String Varient

const getValue2 = (obj: Person, key: P) => {
  return obj[key];
};

getValue2(person1, "name"); // Okay
getValue2(person1, "Name"); // Error
```

## [typeof](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)

Copying type from other object/variable without knowing tyoes ourself
