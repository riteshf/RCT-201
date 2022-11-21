/**
 * A method that gives me number at the given index from the given array
 * @number[] arr number array
 * @number index number smaller then array length
 * @returns it reutrns a number
 */
const getAtIndex = (arr: number[], index?: number): number => {
  if (!index) return -1;
  return arr[index];
};

let arr: number[] = [1, 2, 3, 4, 5, 6, 7];

getAtIndex(arr, 0); // 1
getAtIndex(arr, 1); // 2
// getAtIndex(arr, "bye"); // Error
getAtIndex(arr); // -1

/**
 *
 * @param a
 */
const getY = (a: string): void => {
  console.log("Hello");
  //   return a;  // Error
};
