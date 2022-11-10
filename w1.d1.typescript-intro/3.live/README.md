## [Typescript](https://www.canva.com/design/DAFRVo6KiiU/Y6terVDplneB3iad36-kJQ/view?utm_content=DAFRVo6KiiU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

- TypeScript is JavaScript with added syntax for types.
- Typescript is a superset of Javascript created by Microsoft.
- Typescript is compiled to Javascript.
- Typescript helps developer to code better and make less mistakes.
- It provides out-of-box suggestions for more interactive coding experience.

# Installation

- `npm init -y`
- `npm i typescript`
- `npm i tsc -D`
- Add script

```json
"start": "tsc filename.ts"
```

**Note**: File extensions is `.ts` or `.tsx`.

# Basic Types

## string

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
  - Using `any` disables all further type checking, and it is assumed
  - you know the environment better than TypeScript.

```ts
let x: any = "Hello";
x = 1; // Okay
x = true; // Okay
```

- Literal Types
  - When we know what is going to be exact value of a variable, we use literal type

```ts
let x: "hello" = "hello";
x = "hello"; // Okay
x = "howdy"; // Error
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

## Object

- Object
  A very common way of defining an Object, not helpful at all as does not throw any errors.

```ts
let user1: Object = { id: 1, name: "Ritesh" };
user1 = { lastName: "Firodiya" }; // Okay
```

- Object Literal
  Helps developer to understand the internal structure of

```ts
let user2: { id: number; name: string } = { id: 1, name: "Ritesh" };
user2 = { id: 2, name: "John" }; // Okay
user2 = { lastNname: "Doe" }; // Error
```

- Record
  Used when we know the exact value type in an Object.

```ts
let question: Record<string, boolean> = {
  isMarried: false, // Okay
  isEmployyed: true, // Okay
  isIndian: true, // Okay
  name: "Ritesh", // Error
};
```

# Functions Types

- Parameter type annotation
- Return Type Annotations
- Anonymous Functions

# Object Types

- Object
- Object Literal
- Record

# Array

-
