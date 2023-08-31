let inputTodo = document.getElementById('input-todos');
let addTodo = document.getElementById('add-todos');
let itemList = document.getElementById('list-items');
let span = document.createElement('span');

function addItem() {
    let errMsg = document.getElementById('err-msg');
    if (inputTodo.value === '') {
        errMsg.style.display = "block";
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputTodo.value;
        itemList.appendChild(li);

        span.innerHTML = 'delete';
        itemList.appendChild(span);
        errMsg.style.display = "none";

        inputTodo.value = '';
    }
}
itemList.addEventListener("click", function(e) {
    if (e.target.tagname === "span") {
        e.target.parentElement.removeChild;
    }
    itemList.removeChild('span');
})