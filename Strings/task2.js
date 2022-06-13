const isUpperCase = (char) =>
  char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
const isLowerCase = (char) =>
  char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;

const reverseCase = (sentence) => {
  if (typeof sentence !== "string") {
    throw new TypeError("Parameter should be a string");
  }
  let newStr = "";
  const margin = 32;
  for (let i = 0; i < sentence.length; i++) {
    const curr = sentence[i];
    if (isLowerCase(curr)) {
      newStr += String.fromCharCode(curr.charCodeAt(0) - margin);
    } else if (isUpperCase(curr)) {
      newStr += String.fromCharCode(curr.charCodeAt(0) + margin);
    } else {
      newStr += curr;
    }
  }
  console.log(newStr);
  return newStr;
};

reverseCase("Hello theRe");
reverseCase("BIG LETTERS");
reverseCase(12);
