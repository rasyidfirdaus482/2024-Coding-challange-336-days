function positiveSum(arr) {
  let sum = 0;
  arr.forEach(function (num) {
    if (num > 0) {
      sum += num;
    }
  });
  return sum;
}

console.log(positiveSum([2, -1, 2, 1]));
