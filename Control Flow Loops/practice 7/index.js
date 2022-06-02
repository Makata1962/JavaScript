const arr = [1, 2, 3, 4, 8, 2, 1, 1, 5, 2];
let sum = 0;
function sumEvenArr(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
    i++;
  }
  return sum;
}

sumEvenArr(arr);
console.log(sum);
