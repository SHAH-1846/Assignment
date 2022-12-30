function primeNumberOrNot() {
  const number = Number(prompt("Enter a number:"));

  if (number <= 0 || number - Math.floor(number) !== 0) {
    document.write("Invalid number");
    console.log("Invalid number");
    return;
  }

  function isPrime(number) {
    var prime = true;

    if (number === 1) {
      document.write("1 is neither prime nor composite number" + "<br/>");
      console.log("1 is neither prime nor composite number");
    } else if (number > 1) {
      for (i = 2; i < number; i++) {
        if (number % i == 0) {
          prime = false;
          break;
        }
      }

      if (prime) {
        document.write(number, " is a prime number" + "<br/>");
        console.log(number, " is a prime number");
      } else {
        document.write(number, " is not a prime number" + "<br/>");
        console.log(number, " is not a prime number");
      }
      return prime;
    }

  }

  isPrime(number);

  function nextPrime(number) {
    var nxtNumber = number + 1;
    {
      while (!isPrime(nxtNumber)) {
        nxtNumber = ++nxtNumber;
      }
      return nxtNumber;

    }

  }

  const nextPrimeNumber = nextPrime(number);
  document.write("Next Prime Number : ", nextPrimeNumber, "<br/>");
  console.log("Next Prime Number : ", nextPrimeNumber);

  const difference = nextPrimeNumber - number;
  document.write("Difference : ",difference);
  console.log("Difference : ", difference);
}
