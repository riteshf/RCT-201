// ENUM
enum Gender {
  male = "Male",
  female = "Female",
  other = "Other genders that dont want to specify",
}

const gender1: Gender = Gender.other;
console.log(gender1);

// Tuple - exactly how many elements we have in an array

let arr: [number, string] = [1, "Ritesh Firodiya"];
arr[0] = 5; // Okay
arr[0] = "Hello"; // Error

// 2D Array
let arr_2d: [number, number][] = [
  [1, 2], // Okay
  [3, 4, 5], // Not Okay
  [6, 7], // Okay
];
