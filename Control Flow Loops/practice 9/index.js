let primeNumbers = [];

for (let i = 2; i <= 10; i++) {
  let count = i;
  for (let j = 2; j <= i / 2; j++) {
    if (Math.floor(i / j) == i / j) {
      count--;
    }
  }
  if (count === i) {
    primeNumbers.push(i);
  }
}

console.log(primeNumbers);
