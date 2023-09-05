let inputTodo = document.getElementById('input-todos');
let addTodo = document.getElementById('add-todos');
let itemList = document.getElementById('list-items');
let errMsg1 = document.getElementById('err-msg1');
let errMsg2 = document.getElementById('err-msg2');

// add eventlistener to input box on presssing enter key
inputTodo.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo.click();
    }
});

// to add item to list
function addItem() {

    if (inputTodo.value === '') {
        errMsg1.style.display = "block";
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputTodo.value;
        itemList.appendChild(li);
        li.id = "new-item";

        let delBtn = document.createElement('button');
        delBtn.innerHTML = 'delete';
        li.appendChild(delBtn);
        delBtn.id = "del-btn";

        let doneBtn = document.createElement('button');
        doneBtn.innerHTML = 'Completed';
        li.appendChild(doneBtn);
        doneBtn.id = "complete-btn";

        errMsg1.style.display = "none";

        console.log(doneBtn.id, delBtn.id);

        console.log(document.querySelectorAll("li").length);

    };

    inputTodo.value = '';

    errMsg2.style.display = "none";
}
// to remove item form list
itemList.addEventListener("click", (e) => {
    if (e.target.id === "del-btn") {
        confirm('ARE YOU SURE YOU WANT TO DELETE THIS TASK?');
        e.target.parentElement.remove();
        console.log(document.querySelectorAll("li").length);


    } else if (e.target.id === "complete-btn") {
        alert('Task completed');
        e.target.parentElement.remove();
        // displaying completed box and creating list in it
        document.getElementById("completed").style.display = "block";
        let compli = document.createElement("li");
        // compli.innerHTML = e.target.parentElement.textNode;
        document.getElementById("completed").appendChild(compli);
        compli.id = "newli"

        //creating a new delete btn
        let delBtn = document.createElement('button');
        delBtn.innerHTML = 'delete';
        compli.appendChild(delBtn);
        delBtn.id = "del-btn";
        // adding event listener to the delete btn
        document.getElementById("del-btn").addEventListener("click", (e) => {
            confirm('ARE YOU SURE YOU WANT TO DELETE THIS TASK?');
            e.target.parentElement.remove();

        }, false);
    };
    if (document.querySelectorAll("li").length === 0) {
        errMsg2.style.display = "block";
    };
}, false);