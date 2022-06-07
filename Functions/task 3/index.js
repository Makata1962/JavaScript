function func() {
  console.log("Hello World!");
}

function genericFunction(func) {
  try {
    if (typeof func() !== "function") {
      console.log(typeof func());
      throw new Error("Type of parameter should be function");
    }
  } catch (err) {
    console.log(err.message);
  }
}

genericFunction(func());
