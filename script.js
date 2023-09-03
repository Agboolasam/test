let inputTodo = document.getElementById('input-todos');
let addTodo = document.getElementById('add-todos');
let itemList = document.getElementById('list-items');

inputTodo.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo.click();
    }
})

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

        .addEventListener("click", (e) => {
            if (e.target.id === "del-btn") {
                e.parentElement.remove(); //we have an issue here
            }

        });


        inputTodo.value = '';
        errMsg.style.display = "none";
    }
}