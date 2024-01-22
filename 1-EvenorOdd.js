// soal = Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// dengan if else
function evenOrOdd(number) {
  result = "";
  if (number % 2 == 1 || number % 2 == -1) {
    result = "Odd";
  } else {
    result = "Even";
  }
  return result;
}

console.log(evenOrOdd(-10));

// dengan ternary operator
// function evenOrOdd(number) {
//   return number % 2 == 1 || number % 2 == -1
//     ? (result = "Odd")
//     : (result = "Even");
// }

// console.log(evenOrOdd(-10));
