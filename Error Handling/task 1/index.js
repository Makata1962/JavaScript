const value = 100;
const nearLimit = 90;
const limit = 100;

try {
  function checkLimit(value) {
    if (value >= nearLimit && value <= limit) {
      console.warn("Value is near the limit");
    }
    if (value > limit) {
      throw new Error("Value is more than limit");
    }
  }
} catch (err) {
  console.log(err.stack);
}

checkLimit(110);
