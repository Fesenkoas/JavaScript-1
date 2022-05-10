setInterval(printTime, 1000);

function printTime() {
    const d = new Date();
    let h = d.getHours();
    if (h < 10){
        h = '0' + h;
    }
    let m = d.getMinutes();
    if (m < 10){
        m = '0' + m;
    }
    let s = d.getSeconds();
    if (s < 10){
        s = '0' + s;
    }
    const h1 = document.createElement('h1');
    const time = document.createTextNode(`${h} : ${m} : ${s}`);
    h1.appendChild(time);
    if (root.firstElementChild) {
        root.replaceChild(h1, root.firstElementChild);
    }
    else {
        root.appendChild(h1);
       
    }

}
