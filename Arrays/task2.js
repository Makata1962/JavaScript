let arr = [];
function reverse(arr) {
  try {
    // console.log(!arr.length);
    // console.log(!Array.isArray(arr));
    if (!Array.isArray(arr) || !arr.length) {
      throw new TypeError(
        `Parameter should be an array and shouldn't be empty`
      );
    } else {
      for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
      }
    }
  } catch (err) {
    console.log(err.message);
  }
}

reverse(arr);

console.log(arr);
