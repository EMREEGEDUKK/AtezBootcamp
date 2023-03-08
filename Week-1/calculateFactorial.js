const calculateFactorial = (n) =>  {
    if (n < 0) {
      return "factorial of negative numbers is not calculated";
    }
    else if (n === 0 || n === 1) {
      return 1;
    }
    else if (typeof n !== "number" || !Number.isInteger(n)) { // Return an error if n is not a number or integer
      return "Invalid value.";
    }
    else {
      let factorial = 1;
      for (let i = 2; i <= n; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }

  console.log(calculateFactorial(6));
  console.log(calculateFactorial("E")); 
  console.log(calculateFactorial(0)); 
  console.log(calculateFactorial(-2)); 
  console.log(calculateFactorial(4.6));


  