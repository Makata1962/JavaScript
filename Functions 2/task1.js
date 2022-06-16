const mix = (...cbs) => cbs.reduce((res, cb) => cb(res), undefined);
try {
  console.log(typeof mix);
  if (typeof mix !== "function") {
    throw new TypeError("Parameter should be a function");
  }
  var result = mix(
    () => 0,
    (prev) => prev + 1,
    (prev) => prev * 2,
    (prev) => prev - 8,
    (prev) => prev / 2
  );
} catch (err) {
  console.log(err.message);
}
console.log(result);
