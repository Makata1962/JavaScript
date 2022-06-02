let arr = [1, 5, -1, 10, -5, -6];
let sum = 0;

function sumOfPositiveNumbers(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
    i++;
  }
  return sum;
}

sumOfPositiveNumbers(arr);
console.log(sum);
