////////////////////////////////////
////////////////BOM/////////////////
////////////////////////////////////
//console.log(window); object BOM
//window.open('https://www.tel-ran.com/'); - open side-cite
// console.log(navigator.userAgent);
// console.log(navigator.userAgentData.platform);
// console.log(location.origin);
////////////////////////////////////
////////////////DOM/////////////////
////////////////////////////////////
// console.log(document.body.innerHTML);
const div1 = document.getElementById('div1');
//console.log(div1.innerHTML);
div1.style.border = '1px solid black';

const pdiv1 = document.querySelectorAll('#div1 > p');
for (let i = 0; i < pdiv1.length; i++) {
    pdiv1[i].innerHTML = `<span> new text ${i + 1} </span>`;
}

const children = div1.children;
console.log(children.length);
console.log(children[0] === pdiv1[0]);

for (let i = 0; i < children.length; i++) {
    children[i].style.color = 'red';
}

div1.firstElementChild.style.color = 'green';

const newp1 = document.createElement('p');
const newp1text = document.createTextNode('This text created with special method');
newp1.appendChild(newp1text);
// div1.appendChild(newp1);
document.body.insertBefore(newp1, div1.nextElementSibling);

const newp2 = document.createElement('p');
const newp2text = document.createTextNode('p2 text');
newp2.appendChild(newp2text);

div1.replaceChild(newp2, div1.firstChild);

div1.removeChild(div1.firstElementChild.nextElementSibling);

//date
const d = new Date();
console.log(d);
console.log(d.getHours(), d.getMinutes(), d.getSeconds());
