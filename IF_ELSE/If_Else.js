//Find the largest of three numbers using if-else statement

function largest() {
    const a = Number(prompt("Enter first number"));

    
    if(isNaN(a)){
        document.write("Input must be a number");
        console.log("Input must be a number");
        return;
    }

    const b = Number(prompt("Enter Second number"));

    
    if(isNaN(b)){
        document.write("Input must be a number");
        console.log("Input must be a number");
        return;
    }

    const c= Number(prompt("Enter third number"));

    if(isNaN(c)){
        document.write("Input must be a number");
        console.log("Input must be a number");
        return;
    }


    if(a>b && a>c){
        document.write(`${a} is the largest number`);
        console.log(`${a} is the largest number`);
    }else if(b>c){
        document.write(`${b} is the largest number`);
        console.log(`${b} is the largest number`);

    }else {
        document.write(`${c} is the largest number`);
        console.log(`${c} is the largest number`);

    }
}