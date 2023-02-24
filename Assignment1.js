
// This function takes infinite parameters and sums them using the reduce function and returns them.

function sumInfinityParams(...args) {
    return args.reduce((prev, current) => prev + current);
  }

// This function takes infinite parameters and multiple them using the reduce function and returns them.

const multInfinityParamsArrowFunc = (...args) => {
    return args.reduce((prev, current) => prev * current);
  };


console.log(sumInfinityParams(1,2,3,4)); // return 10
console.log(multInfinityParamsArrowFunc(1,2,3,4)); // return 24