const img = [
    './images/Rouen_Cathedral_1.jpg',
    './images/Rouen_Cathedral_2.jpg',
    './images/Rouen_Cathedral_3.jpg',
    './images/Rouen_Cathedral_4.jpg',
    './images/Rouen_Cathedral_5.jpg',
    './images/Rouen_Cathedral_6.jpg'
]
const prev = document.getElementById('buttonPrev');
const next = document.getElementById('buttonNext');
const picture = document.getElementById('picture');
let i = 0;

prev.onclick = prevHandler;
next.onclick = nextHandler;

function nextHandler (){
    if(i < img.length){
    picture.src = img[i++];
    }
    else i = 0;
}

function prevHandler (){
    if(i > 0){
    picture.src = img[i--];
    }
    else i = img.length-1;
}

