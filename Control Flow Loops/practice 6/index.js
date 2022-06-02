const arr = [1, 2, 3, 4, 5, 1];
let sum = 0;

function sumArr(arr) {
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return console.log(sum);
}

sumArr(arr);
