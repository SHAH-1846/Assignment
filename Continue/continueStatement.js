//Sum of numbers using Continue and Break Statement

function Sum() {
  const limit = prompt("Enter the limit: ");

  if (isNaN(limit)) {
    document.write("Limit not a number");
    console.log("Limit Not a number");
    return;
  } //Returns if limit not a number

  if (limit <= 0 || limit == 0) {
    document.write("Limit should be a valid whole number");
    console.log("Limit should be a valid whole number");
    return;
  }//Returns if limit less than zero or equal to zero

  if ((limit-Math.floor(limit)) !== 0) {
    document.write("Limit should be a whole number");
    console.log("Limit should be a whole number");
    return;
  }//Returns if limit has a decimal place

  let sum = 0;

  for (i = 1; i <= limit; i++) {
    const number = Number(prompt(`Enter number-${i}`));
    if (isNaN(number)) {
      document.write("Input Not a number");
      console.log("Input not a number");
      return;
    } //Returns if the input is not a number

    if (number < 0) {
      document.write("Negative numbers not considered" + "<br />");
      console.log("Negative number not considered");
      continue;
    } //Skips negative numbers

    sum = sum + number;
  }

  document.write(`Sum is : ${sum}`);
  console.log("Sum: ", sum);
}
