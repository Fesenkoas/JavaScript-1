const box = document.querySelector('#box');
const container = document.querySelector('#container');
const t = setInterval(move, 5);
let pos = 0;

function move(){
    pos++;
    box.style.left = pos+'px';
    box.style.top = pos+'px';
    if(pos >= container.clientHeight - box.clientHeight){
        clearInterval(t);
    }
}