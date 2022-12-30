//Program to find the factorial of a number using recursion

function findFactorial() {

    const number = Number(prompt("Enter a number"));

    if(number < 0) {
        document.write("Please Enter a valid number");
        console.log("Enter a valid number");
        return;
    };

    if(number - Math.floor(number) !== 0){
        document.write('Please enter a valid number');
        console.log("Please Enter a valid number");
        return;
    }

    function factorial(a) {

        if(a ===0) {
            return 1;
        }else{
            return a * factorial(a-1);
        }
    }

    const result = factorial(number);
    document.write("Factorial : ", result);
    console.log("Factorial : ", result);
}