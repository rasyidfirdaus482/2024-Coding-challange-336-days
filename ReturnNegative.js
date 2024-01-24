function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));
