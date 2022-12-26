### [Typesctipt Advance](https://www.canva.com/design/DAFRbdvZ-u0/OA0SUBxRnYXB2q83I2GtrQ/view?utm_content=DAFRbdvZ-u0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

### Getting Started

- `npm init -y`
- `tsc init`
- Configure `tsconfig.json` file

```json
{
  "compilerOptions": {
    "target": "ES6",
    "outDir": "dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- Command

```cmd
tsc --watch
```

### Topics

- [ENUM](https://www.typescriptlang.org/docs/handbook/enums.html)

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

- [Tuple](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#tuple-destructuring)

```ts
// Array with exact 2 elements
let a: [string, string] = ["Hi", "Bye"];

// 2 D array
let arr: Array<[number, number]> = [
  [1, 1],
  [2, 2],
];
```

- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

An Art of designing re-usable functions in Typescript, where we pass type along with

```ts
type Student = { rollNo: number; fullName: string; age: number };
type Instructor = { id: number; name: string; subject: string };

let students: Student[] = [
  { rollNo: 1, fullName: "A B", age: 21 },
  { rollNo: 2, fullName: "R F", age: 27 },
];

let instructors: Instructor[] = [
  { id: 1, name: "A B", subject: "RCT-101" },
  { id: 2, name: "R F", subject: "RCT-201" },
];

function getStudent<Type>(arg: Type[], index: number): Type {
  return arg[index];
}

getStudent<Student>(students, 0); // Okay
getStudent<Instructor>(instructors, 0); // Okay
```

- [keyof](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html)

The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”:

```ts
type Person = { name: string; lastName: string };
let person1: Person = { name: "Ritesh", lastName: "Firodiya" };

type P = keyof Person;
// P can be `name` or `lastName` i.e. String Varient

const getPersonValue = (obj: Person, key: P) => {
  return obj[key];
};

getPersonValue(person1, "name"); // Okay
getPersonValue(person1, "Name"); // Error
```

- [typeof](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)

Copying type from other object/variable without knowing tyoes ourself

```ts
let s = "hello";
let n: typeof s;
```
