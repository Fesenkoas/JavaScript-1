const button = document.getElementById('button');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
console.log(button.title);
name1.onkeyup = valueToUpperCase;
name2.onkeyup = valueToUpperCase;
button.onclick = show;


function show(){
    alert(name1.value);
}

function valueToUpperCase(){
    name1.value = name1.value.toUpperCase();
}

