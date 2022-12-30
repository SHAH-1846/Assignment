//Printing Fibonacci Series using WhileLoop


function Fibonacci() {
    let limit = prompt("Enter Limit: ");
    let i=0;
    let j=1;
    let k;
    let max=0;

    Element.innerHTML = ` ${document.write(i + "<br />"  + "<br />")}`;
    Element.innerHTML= `${document.write(j + "<br />" + "<br />")}`;

    while(max <= limit){
        k = i +j;
        Element.innerHTML = `${document.write(k + "<br />" + "<br />")}`;
        i=j;
        j=k;
        max++;
    }

}