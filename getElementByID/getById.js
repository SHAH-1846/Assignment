
function getById(){
    const input = prompt("Enter an id");

function getElementById(id) {
    const result = [];

    function getEachIDNode(node) {
        if(!(node instanceof HTMLElement))
            return;

        if(node.hasAttribute('id') && node.getAttribute('id') === id) {
            result.push(node);
        }

        for(let i=0; i<node.childNodes.length; i++) {
            if(result.length > 0)
                return;
            getEachIDNode(node.childNodes[i]);
        }

    }
    getEachIDNode(document.body);
    return result[0];
}

const result = getElementById(input);

if(result == null){
    document.write("No Elements found");
    console.log("NO elements found");
    return;
}

document.write(result);
console.log(result);

}