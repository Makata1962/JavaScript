const arr = [];
try {
  function getDivisors(num) {
    if (typeof num !== "number") {
      throw new TypeError("parameter type is not a Number");
    }
    if (num <= 0) {
      throw new Error("number must be positive and more than 0");
    }
    let i = 1;
    while (i <= num) {
      if (num / i === Math.floor(num / i)) {
        arr.push(i);
      }
      i++;
    }
  }
} catch (err) {
  console.log(err.message);
}
getDivisors("st");
getDivisors(0);
getDivisors(16);
getDivisors(-1);
console.log(arr);
