
// This function takes infinite parameters and multiple them using the reduce function and returns them.

const multipleInfinityParams = (...args) => {
  if (args.length === 0) {
    return "No parameters entered. Please enter at least one number.";
  }
  if (args.some(arg => typeof arg !== "number")) {
    return "Invalid parameter type. Please enter only numbers.";
  }
  return args.reduce((prev, current) => prev * current);
};

console.log(multipleInfinityParams(1,2,3,4));
console.log(multipleInfinityParams(1,2,3,"a"));