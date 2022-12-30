//Checking palindrome or not using for loop


function checkPalindrome() {

    const value = prompt("Enter a string or number: ");


    const length = value.length;

    for(i=0; i<=(length/2); i++) {

        if(value[i] !== value[length-1-i]) {

            console.log('Not a palindrome');
            alert("It is not a palindrome");
            return;
        }

    }
    console.log("It is a palindrome");
    alert("It is a palindrome");

}