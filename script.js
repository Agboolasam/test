let inputTodo = document.getElementById('input-todos');
let addTodo = document.getElementById('add-todos');
let itemList = document.getElementById('list-items');

if (itemList.length = 0) {
    let errMsg2 = document.getElementById('err-msg2');
    errMsg2.style.display = "block"


}


function addItem() {
    let errMsg = document.getElementById('err-msg1');
    if (inputTodo.value === '') {
        errMsg.style.display = "block";
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputTodo.value;
        itemList.appendChild(li);

        let delBtn = document.createElement('button');
        delBtn.innerHTML = 'delete';
        li.appendChild(delBtn);
        delBtn.id = "del-btn";

        let doneBtn = document.createElement('button');
        doneBtn.innerHTML = 'Completed';
        li.appendChild(doneBtn);
        doneBtn.id = "complete-btn";


        inputTodo.value = '';
        errMsg.style.display = "none";
    }
}