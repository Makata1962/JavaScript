function f(arr) {
  try {
    if (arr.isArray) {
      console.log(!arr.isArray);
      throw new TypeError("Passed parameter has to be array");
    }

    if (arr.length < 0) {
      throw new Error("Passed array can not be empty");
    }
    if (typeof arr.every !== "number") {
      console.log(arr.every);
      throw new Error("Passed array can only contain numbers");
    }
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  } catch (err) {
    console.log(err.message);
  }
}
const arr = [1, 2, 3];
f(arr);
