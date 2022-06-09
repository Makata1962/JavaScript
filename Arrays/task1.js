// function f(arr) {
//     if(Array.isArray(arr)) {

//     }
// }

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




const newArr =  flatArray = [].concat.apply([], arr);

console.log(arr);


console.log(newArr);

