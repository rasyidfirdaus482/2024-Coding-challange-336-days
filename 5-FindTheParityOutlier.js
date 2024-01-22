function findOutlier(integers) {
  const evens = [];
  const odds = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evens.push(integers[i]);
    } else {
      odds.push(integers[i]);
    }
  }

  if (evens.length === 1) {
    return evens[0];
  } else {
    return odds[0];
  }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
