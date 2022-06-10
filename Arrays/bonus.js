function rotate(arr, num, str) {
  try {
    if (
      Array.isArray(arr) &&
      typeof num === "number" &&
      typeof str === "string"
    ) {
      for (let i = 0; i < num; i++) {
        if (str === "right") {
          let a = arr.pop();
          arr.unshift(a);
          console.log(arr);
        } else if (str === "left") {
          let a = arr.shift();
          arr.push(a);
          console.log(arr);
        }
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}

var arr = [1, 2, 3];

rotate(arr, 1, "left");
rotate(arr, 1, "right");

try {
  rotate(arr, 1, "left");
rotate(arr, 1, "right");

} catch(err) {
  console.log(err.message);
}