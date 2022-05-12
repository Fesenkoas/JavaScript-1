const box = document.querySelector('#box');
const container = document.querySelector('#container');

const t = setInterval(move, 5);
let pos = 0;
let switcher = true;
let size = 60;
let boom = false;
const b = 'setInterval(boomFunc, 1)';
box.setAttribute('onclick', b);



function move() {
    if (switcher) {
        pos++;
        box.style.left = pos + 'px';
        box.style.top = pos + 'px';
        if (pos >= container.clientHeight - box.clientHeight) {
            switcher = false;
        }
    }
    else{
        pos--;
        box.style.left = pos + 'px';
        box.style.top = pos + 'px';
        if (pos === 0) {
            switcher = true;
        }
    }
}

function boomFunc(){
    clearInterval(t);
    if(size === 60){
        const newtext = document.createTextNode("NOW I'M CRAZY!!!");
        box.replaceChild(newtext, box.firstChild);
        box.style.display = 'flex';
        box.style.alignItems = 'center';
        box.style.textAlign = 'center';
        box.style.justifyContent = 'center';
    }   
    if(size < 200){
        size++;
        pos--;
        box.style.left = pos + 'px';
        box.style.top = pos + 'px';
    }
    box.style.height = size + 'px';
    box.style.width = size + 'px';
    setInterval(move, 300);
}
