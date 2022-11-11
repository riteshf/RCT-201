## [Typescript](https://www.canva.com/design/DAFRVo6KiiU/Y6terVDplneB3iad36-kJQ/view?utm_content=DAFRVo6KiiU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

- TypeScript is JavaScript with added syntax for types.
- Typescript is a superset of Javascript created by Microsoft.
- Typescript is compiled to Javascript.
- Typescript helps developer to code better and make less mistakes.
- It provides out-of-box suggestions for more interactive coding experience.

# Installation

- `npm init -y`
- `npm i typescript -g`
- `npm i tsc -D`
- Add script

```json
"start": "tsc filename.ts"
```

**Note**: File extensions is `.ts` or `.tsx`.

# Basic Types

- string

```ts
let a: string = "Hello World";
a = "Bye!"; // Okay
a = 3; // Error
```

- number

```ts
let b: number = 123;
b = 3; // Okay
b = "Hello!"; // Error
```

- boolean

```ts
let c: boolean = true;
c = false; // Okay
c = "Hello!"; // Error
```

- null

```ts
let d: null = null;
d = false; // Error
d = "Hello!"; // Error
```

- undefined

```ts
let e: undefined = undefined;
e = null; // Error
e = "Hello!"; // Error
```

- any
  - None of the following lines of code will throw compiler errors.
  - Using `any` disables all further type checking, and it is assumed you know the environment better than TypeScript.

```ts
let f: any = "Hello";
f = 1; // Okay
f = true; // Okay
```

- Literal Types
  - When we know what is going to be exact value of a variable, we use literal type

```ts
let g: "hello" = "hello";
g = "hello"; // Okay
g = "howdy"; // Error
```

- Union Types
  - When we are not certain between different types of values
  - This is majorly refered as `OR` type, separated using `|` operator.

```ts
let h: string | number = "abcd";
h = 4; // Okay
h = "Bye!"; // Okay
h = true; // Error
```

# Functions Types

Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions.

```ts
const add = (a: number, b: number): number => {
  return a + b;
};

add(1, 1); // Okay
add(1, "Hello"); // Error
```

# Array

- To specify the type of an array like `[1, 2, 3]`, you can use the syntax `number[]`.
- This syntax works for any type (e.g. string[] is an array of strings, and so on).
- You may also see this written as `Array<number>`.

```ts
let arr1: number[] = [1, 2, 3];
arr1.push(4); // Okay
arr1.push("Hello"); // Error

let arr2: string[] = ["A", "B1DFSDF", "SDSDSCD", "SDFCSDCDS"];
arr2.push("Hello"); // Okay
arr2.push(4); // Error

let arr3: Array<number> = [1, 2, 34];
arr3.push(4); // Okay
arr3.push("Hello"); // Error

let arr4: Array<string> = ["A", "B1DFSDF", "SDSDSCD", "SDFCSDCDS"];
arr4.push("Hello"); // Okay
arr4.push(4); // Error

const arr5: Array<number | string> = [1, 2.5, "csdascs"];
arr5.push("Hello"); // Okay
arr5.push(4); // Okay
arr5.push(false); // Error
```

- readonly
  - This restricts us from updating the data.
  - only applicable to `Array` and `Tuple`

```ts
let arr6: readonly number[] = [1, 2, 3];
arr6.push(4); // Error
arr6.push("Hello"); // Error
```

## Object

- Object
  - A common way of defining an Object.
  - Using `Object` disables all further type checking, and it is assumed you know the environment better than TypeScript.

```ts
let user1: Object = { id: 1, name: "Ritesh" };
user1 = { lastName: "Firodiya" }; // Okay
```

- Record
  Used when we know the exact value type in an Object.

```ts
let question: Record<string, boolean> = {
  isMarried: false, // Okay
  isEmployeed: true, // Okay
  isIndian: true, // Okay
  name: "Ritesh", // Error
};
```

- Object Literal
  - Used when we know the internal structure.

```ts
let user2: { id: number; name: string } = { id: 1, name: "Ritesh" };
user2 = { id: 2, name: "John" }; // Okay
user2 = { lastNname: "Doe" }; // Error
```

## Custom Type

- Useful for sharing types across multiple places.

```ts
type User = {
  id: number;
  name: string;
};
let user3: User = { id: 1, name: "Ritesh" }; // Okay
let user4: User = { id: 1, lastName: "Firodiya" }; // Error
```
