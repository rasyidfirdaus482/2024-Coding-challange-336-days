function squareDigits(num) {
  // Convert the number to an array of digits
  const digits = Array.from(String(num), Number);

  let result = "";
  for (let i = 0; i < digits.length; i++) {
    result += digits[i] * digits[i];
  }

  return parseInt(result, 10);
}

// Example usage
console.log(squareDigits(3212));
