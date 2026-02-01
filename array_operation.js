/**
 * Objective: write a function to give me the sum of all  numbers in an array
 * step-1: declare a function
 * step-2: call check whether the function is called properly
 * step-3: set a parameter(s)
 * ste-4: pass the parameter(s), check whether parameter is passed in a proper format
 */

function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum = sum + number;
  }
  return sum;
}

const nums = [54, 62, 12, 6];
const sum = sumOfNumbers(nums);
console.log("Sum of numbers is: ", sum);
