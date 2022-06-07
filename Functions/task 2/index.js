function f(arr) {
  try {
    if (!Array.isArray(arr)) {
      throw new TypeError("Passed parameter has to be array");
    }

    if (!arr.length) {
      throw new Error("Passed array can not be empty");
    }

    let allPassed = arr.every(function (i) {
      return typeof i === "number";
    });

    if (!allPassed) {
      throw new Error("Passed array can only contain numbers");
    }
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  } catch (err) {
    console.log(err.message);
  }
  return arr;
}
const arr = [1, 2, 3, 5];
f(arr);
