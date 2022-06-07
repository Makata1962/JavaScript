function func(a, b) {
  let sum = a + b;
  console.log(sum);
  return sum;
}

// const func = [1, 2, 3];
function genericFunction(func) {
  try {
    if (typeof func !== "function") {
      throw new TypeError("Type of parameter should be function");
    }
  } catch (err) {
    console.log(err.stack);
  }
  func(1, 3);
}

genericFunction(func);
