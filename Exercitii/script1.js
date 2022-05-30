let array = ["c1", "c2", "c3", "c4", "c5"];
let body = document.getElementsByTagName("body")[0];
function generare() {
    let current = new Date();
    let n = Math.max(10, current.getMinutes());

    for (let i = 0; i < n; i++) {
        let tag = document.createElement("p");
        let text = document.createTextNode("Flavian");
        let randomNum = Math.floor(Math.random() * array.length);
        tag.classList.add(array[randomNum]);
        tag.appendChild(text);
        body.appendChild(tag);
        tag.addEventListener('click',paragrafClick);
    }
}

window.onload = generare();

document.addEventListener('click', clickBody);

function paragrafClick(event)
{
    var numeClasa=event.target.className;
    console.log(numeClasa);
    let paragrafe=document.getElementsByClassName(numeClasa);
    while(paragrafe.length > 0){
        paragrafe[0].parentNode.removeChild(paragrafe[0]);
    }
    event.stopPropagation();
}

function clickBody(event)
{
    alert(event.clientX);
}
