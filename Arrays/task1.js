
function f(arr) {
  try {
    if (Array.isArray(arr)) {
      var sum = 0;
      arr.forEach(function (v) {
        if (typeof v == "object") sum += f(v);
        else sum += v;
      });
    } else {
      throw new TypeError(`Parameter should be an Array`);
    }
  } catch (err) {
    console.log(err.stack);
  }
  return sum;
}

const arr = [
  [
    [1, 2],
    [1, 2],
  ],
  [
    [2, 1],
    [1, 2],
  ],
];
f(arr); // 12
const arr2 = [[[[[1, 2]]]]];
f(arr2); // 3
const arr3 = [[[[[1, 2]]], 2], 1];
f(arr3); // 6
const arr4 = [[[[[]]]]];
f(arr4); // 0
const arr5 = [[[[[], 3]]]];
f(arr5); // 3
const arr6 = 1;
f(arr6); // ERROR

console.log(f(arr));
console.log(f(arr2));
console.log(f(arr3));
console.log(f(arr4));
console.log(f(arr5));
console.log(f(arr6));
