const button = document.getElementById('button');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
button.addEventListener('click', show);
button.addEventListener('click', e => console.log(e.timeStamp));
const names = [name1, name2];

for (let i = 0; i < names.length; i++) {
    names[i].onkeyup = valueToUpperCase;
}

function show() {
    for (let i = 1; i < names.length; i++) {
        const p = document.createElement('p');
        const text = document.createTextNode(names[i].value);
        p.appendChild(text);
        document.body.appendChild(p);
    }
}

function valueToUpperCase(e) {
    e.target.value = e.target.value.toUpperCase();
}