let n = 1000;
let count = 0;

// while (result / 2 > 50) {
//   count++;
//   var result = n / 2;
//   result++;
// }

function divideByTwo(n) {
  return (result = n / 2);
}

function countIteration(n) {
  divideByTwo(n);
  do {
    divideByTwo(result);
    count++;
    result++;
  } while (result > 50);

  return count;
}

countIteration(1000);
console.log(count);
