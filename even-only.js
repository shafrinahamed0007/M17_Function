/**
 *  create function that will return only the even numbers
 *  return the sim of even numbers
 */

function evenNumbersOnly(numbers) {
  const even = [];
  for (number of numbers) {
    if (number % 2 == 0) {
      console.log(number);
      even.push(number);
    }
  }
  return even;
}

// const numbers = [5, 8, 97, 24, 6];
// const evens = evenNumbersOnly(numbers);
// console.log(evens);

function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (number of numbers) {
    if (number % 2 === 0) {
      sum = sum + number;
    }
  }
  return sum;
}

const numbers = [5, 8, 97, 24, 6];
const sum = sumOfEvenNumbers(numbers);
console.log("Sum of the even numbers is:", sum);
