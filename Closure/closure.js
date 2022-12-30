//Closure
function closure() {
document.write("Closure: " + "<br/>");
console.log("closure: ");
document.write("Closure means a function bind together with its lexical environment" + "<br/>" + "Function along with its lexical scope forms a closure" + "<br/>");
console.log("Closure means a function bind together with its lexical environment \n Function along with its lexical scope forms a closure");

function outer(){
    var a = 7;
    function inner(){
        document.write("From Inner function: " + a + "<br/>");
        console.log("From Inner function: " ,a);
    }
    a=100;
    return inner;
}

var b = outer();
document.write("Function called from outside of outer function : " + "<br/>");
console.log("Function called from outside of outer function : ");
b();



}
