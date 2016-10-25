const nRange = (min, max, arr = []) => {
  arr.push(min);
  if (Math.max(...arr) < max) nRange(min+1, max, arr);
  return arr; // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
};

const sumAll = (a) => {
  let min = Math.min(...a);
  let max = Math.max (...a);
  return nRange(min, max).reduce((a,b) => a + b, 0); // 55
};

console.log(sumAll([1,10])); // 55
