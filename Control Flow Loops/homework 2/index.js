let n = 1000;
let num = 0;
var result = n / 2;

// while (result / 2 > 50) {
//   count++;
//   result++;
//   console.log(result);
// }

function divideByTwo(n) {
  return (result = n / 2);
}

function countIteration(n) {
  divideByTwo(n);
  do {
    divideByTwo(result);
    num++;
    result++;
  } while (result > 50);

  return num;
}

countIteration(1000);
console.log(num);
