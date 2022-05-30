var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("inp").value=today;

inp=document.getElementById("inp");


let selectie=document.getElementById("selectie");
let index=parseInt(localStorage.index)
if(index==null || index>2)
{
    index=0;
}
selectie.selectedIndex=index;
let text = selectie.options[selectie.selectedIndex].text;
inp.style.color=text;

let id=null;




function changeColor()
{
    let i=index+1;
    if(i==3){
        i=0;
    }
    clearInterval(id);
    id=setInterval(frame,3000);

    function frame(){
        
        selectie.selectedIndex=i;
        localStorage.removeItem('index');
        localStorage.setItem('index',i);
        text=selectie.options[selectie.selectedIndex].text;
        inp.style.color=text;
        console.log(text);
        if(i==2){
            i=0;
        }
        else{
            i++;
        }
    }
}

changeColor();

document.addEventListener('keydown',stop);

function stop(event)
{
    const key=event.key;
    if(key=="s")
    {
        clearInterval(id);
    }
}