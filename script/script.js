const item = document.getElementById('item');
const addItem = document.getElementById('addItem');
const todoList = document.getElementById('todoList');

addItem.onclick = () => {
    const text = item.value.trim();
    if (text) {
        const li = document.createElement('li');
        const buttonDel = document.createElement('button');
        buttonDel.append(document.createTextNode('X'));
        buttonDel.classList.add('del')
        buttonDel.onclick = e => {
            //li.remove();
            e.target.parentElement.remove();
        }

        li.append(document.createTextNode(text), buttonDel);
        todoList.append(li);
    }
    item.value = ''
};

//HW add enter like onclick