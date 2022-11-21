console.log("Hello");
// Primitivie: stirng, number, boolean, null, undefined,
// Object, array
// ES6 => ES5
// write types
const a: string = "Hello";
let b: number = 123.2323232;
b = 456;
// b = "Bye"; // Error

let c: boolean = true;

// null, undefined

// Union Type
let age: number | string = "23";
age = 23;
age = 54;
age = "Twenty";

// string leteral
let variable: "Hello" = "Hello";
variable = "Hello";
// variable = "hello"; // Error

// string literal with union operator
let gender: "male" | "female" | "others" = "male";
gender = "female";
// gender = "Female"; // Error
// gender = "Male"; // Error

// any: Bad developer

// Array
let arr1: Array<number> = [1, 2, 3, 4];
// arr1.push("1234") //Error
let arr2: number[] = [1, 2, 3, 4];

let arr3: readonly string[] = ["A", "B", "C", "D"];
// arr3.push("1234"); // Error
// arr3.pop(); // Error
let arr4: Array<string> = ["A", "B", "C", "D"];

let arr5: Array<number | string> = [12, 13, "AB", "CD", 11, 22, "EF"];
arr5.push("1234");

// Object;

// age is optional key
type User = { id: number; name: string; age?: number };

let user1: User = {
  id: 1,
  name: "Ritesh",
};
// user = { lastName: "ritesh" }; // Error

// Array of users
let arr_users: User[] = [
  { id: 1, name: "Ritesh 1" },
  { id: 2, name: "Ritesh 2", age: 23 },
  { id: 3, name: "Ritesh 3" },
  { id: 4, name: "Ritesh 4" },
];

// define type for

let students: {
  roleNo: number;
  name: string;
  class: number;
  batch: "RCT-101" | "RCT-201";
  age?: number;
}[] = [
  { roleNo: 1, name: "Alok", batch: "RCT-201", class: 1 },
  { roleNo: 2, name: "Shivam", batch: "RCT-201", class: 1 },
  { roleNo: 3, name: "Aditya", batch: "RCT-101", class: 1 },
  { roleNo: 4, name: "Arpit", batch: "RCT-101", class: 1 },
  //   { roleNo: 4, name: "Mahesh", batch: "RCT-301", class: 1 }, // Error
  {
    roleNo: 4,
    // fullName: "Ritesh Firodiya",
    name: "Ritesh",
    batch: "RCT-201",
    class: 1,
    age: 23,
  }, // Error
  {
    roleNo: 4,
    name: "Ritesh Firodiya",
    batch: "RCT-201",
    class: 1,
    age: 27,
  }, // Okay
];

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Cart = {
  id: number;
  products: Product[];
  total: number;
};

let cartItems: Cart[] = [
  {
    id: 1,
    products: [{ id: 1, name: "Towel", price: 250, quantity: 2 }],
    total: 500,
  },
  {
    id: 2,
    products: [{ id: 1, name: "Towel", price: 250, quantity: 3 }],
    total: 750,
  },
  {
    id: 2,
    products: [
      { id: 1, name: "Towel", price: 250, quantity: 3 },
      { id: 2, name: "Shampoo", price: 250, quantity: 1 },
    ],
    total: 1000,
  },
];
