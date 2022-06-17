let data = {
  errors: [{ name: "", message: "", stack: "", level: null }],
  value: null,
};

function mix(...cbs) {
  try {
    let passed = data.value;
    for (let i = 0; i < cbs.length; i++) {
      if (typeof cbs[i] !== "function") {
        data.errors[0].level = i;
        data.value = passed;
        throw new Error("Parameter should be a function");
      }
      passed = cbs[i](passed);
    }
    data.value = passed;
  } catch (error) {
    data.errors[0].name = error.name;
    data.errors[0].message = error.message;
    data.errors[0].stack = error.stack;
    let newArr = cbs.slice(data.errors[0].level + 1, cbs.length);
    mix(...newArr);
  }
  return data;
}

mix(
  () => {
    return 0;
  },
  (prev) => {
    return prev + 1;
  },

  (prev) => {
    return prev + 5;
  },

  2,
  (prev) => {
    return prev + 5;
  }
);

console.log(data);
