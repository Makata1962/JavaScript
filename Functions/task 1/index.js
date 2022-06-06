const arr = [];
function getDivisors(num) {
  let i = 1;
  while (i <= num) {
    if (num / i === Math.floor(num / i)) {
      arr.push(i);
    }
    i++;
  }
}
getDivisors(12);
console.log(arr);
