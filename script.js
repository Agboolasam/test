let inputTodo = document.getElementById('input-todos');
let addTodo = document.getElementById('add-todos');
let itemList = document.getElementById('list-items');


function addItem() {
    let errMsg = document.getElementById('err-msg');
    if (inputTodo.value === '') {
        errMsg.style.display = "block";
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputTodo.value;
        itemList.appendChild(li);

        let delBtn = document.createElement('button');
        delBtn.innerHTML = 'delete';
        li.appendChild(delBtn);

        errMsg.style.display = "none";

        inputTodo.value = '';
    }
}