let inputTodo = document.getElementById('input-todos');
let addTodo = document.getElementById('add-todos');
let itemList = document.getElementById('list-items');


inputTodo.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo.click();
    }
});



function addItem() {
    let errMsg1 = document.getElementById('err-msg1');
    let errMsg2 = document.getElementById('err-msg2');
    if (inputTodo.value === '') {
        errMsg1.style.display = "block";
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

        errMsg1.style.display = "none";

        li.addEventListener("click", (e) => {
            if (e.target.tagName == "button") {
                document.confirm('ARE YOU SURE YOU WANT TO DELETE THIS TASK?');
                e.parentElement.remove();
            };
        });

    };

    inputTodo.value = '';
    // errMsg1.style.display = "none";
    errMsg2.style.display = "none";
}