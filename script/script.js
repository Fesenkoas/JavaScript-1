const box = document.querySelector('#box');
const container = document.querySelector('#container');
const t = setInterval(move, 5);

let pos = 0;
let switcher = true;

function move() {
    if (switcher) {
        pos++;
        box.style.left = pos + 'px';
        box.style.top = pos + 'px';
        if (pos >= container.clientHeight - box.clientHeight) {
            clearInterval(t);
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

function boom(){
    clearInterval(t);
}