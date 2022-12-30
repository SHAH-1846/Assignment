function calculator() {
  let result;

  
  const validOperators = ["+", "-", "*", "/"];
  
  const operator = prompt("Enter Operator (+, -, *, /)");

  const isValid = function validOrNot() {
    validOperators.forEach((element) => {
      const validElement = function isValidElement() {
        if (operator == element) {
          return true;
        }

        return null;
      };

    });

    if(!validElement){
        return null;
      }
  };

  if (!isValid) {
    document.write("Invalid Operator");
    console.log("Invalid Operator");
    return;
  }

  if (!isNaN(operator)) {
    document.write("Operator cannot be a number");
    console.log("Operator cannot be a number");
    return;
  }

  // if(operator !== (+ || - || * || / )) {
  //     document.write("Invalid Operator");
  //     console.log("Invalid Operator");
  //     return;
  // }

  const number1 = Number(prompt("Enter number1"));
  const number2 = Number(prompt("Enter number2"));

  switch (operator) {
    case "+":
      result = number1 + number2;
      document.write("Result: ", result);
      console.log(result);
      break;

    case "-":
      result = number1 - number2;
      document.write("Result: ", result);
      console.log("Result: ", result);
      break;

    case "*":
      result = number1 * number2;
      document.write("Result: ", result);
      console.log("Result: ", result);
      break;

    case "/":
      result = number1 / number2;
      document.write("Result: ", result);
      console.log("Result: ", result);
      break;

    default:
      document.write("Invalid Operator!");
      console.log("Invalid Operator!");
      break;
  }
}
