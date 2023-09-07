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

        let div = document.createElement("div");
        itemList.appendChild(div);
        div.id = "items";

        let parag = document.createElement("p");
        parag.innerHTML = inputTodo.value;
        div.appendChild(parag);
        parag.id = "task";

        let dateSpan = document.createElement("span");
        div.appendChild(dateSpan);
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        let h = d.getHours();
        let m = d.getMinutes();
        dateSpan.innerHTML = day + '/' + month + '/' + year + ' ' + h + ':' + m + '(24hrs)';
        div.appendChild(dateSpan);
        dateSpan.id = "date";

        let delBtn = document.createElement('button');
        delBtn.innerHTML = 'delete';
        div.appendChild(delBtn);
        delBtn.id = "del-btn";

        let doneBtn = document.createElement('button');
        doneBtn.innerHTML = 'Completed';
        div.appendChild(doneBtn);
        doneBtn.id = "complete-btn";

        errMsg1.style.display = "none";

        console.log(doneBtn.id, delBtn.id);
        console.log(new Date()); // use this later with thw get method to add date and time to list

        console.log(itemList.querySelectorAll("p").length);

    };

    inputTodo.value = '';

    errMsg2.style.display = "none";
}
// to remove item form list
itemList.addEventListener("click", (e) => {
    if (e.target.id === "del-btn") {
        confirm('ARE YOU SURE YOU WANT TO DELETE THIS TASK?');
        e.target.parentElement.remove();
        if (e.target.parentElement.querySelectorAll("p").length === 0) {
            errMsg2.style.display = "block";
        };



    } else if (e.target.id === "complete-btn") {
        alert('Task completed');
        e.target.parentElement.remove();
        if (e.target.parentElement.querySelectorAll("p").length === 0) {
            errMsg2.style.display = "block";
        };
        // displaying completed box and creating list in it
        document.getElementById("completed").style.display = "block";
        let div2 = document.createElement("div");
        document.getElementById("completed").appendChild(div2);
        div2.id = "items";

        let parag2 = document.createElement("p");
        parag2.innerHTML = e.target.innerHTML;
        div2.appendChild(parag2);
        parag2.id = "task";

        let dateSpan2 = document.createElement("span");
        div.appendChild(dateSpan);
        let d1 = new Date();
        let year1 = d1.getFullYear();
        let month1 = d1.getMonth() + 1;
        let day1 = d1.getDate();
        let h1 = d1.getHours();
        let m1 = d1.getMinutes();
        dateSpan.innerHTML = day1 + '/' + month1 + '/' + year1 + ' ' + h1 + ':' + m1 + '(24hrs)';
        div2.appendChild(dateSpan2);
        dateSpan2.id = "date";
        //creating a new delete btn
        let delBtn2 = document.createElement('button');
        delBtn2.innerHTML = 'Delete';
        compli.appendChild(delBtn2);
        delBtn2.id = "del-btn2";

        //creating redo btn
        let redoBtn = document.createElement('button');
        redoBtn.innerHTML = 'Redo';
        compli.appendChild(redoBtn);
        redoBtn.id = "redo-btn";

        // adding event listener to the delete btn
        delBtn2.addEventListener("click", (e) => {

            confirm('ARE YOU SURE YOU WANT TO REMOVE THIS TASK ? ');
            e.target.parentElement.remove();
            if (document.getElementById("completed").querySelectorAll("p").length === 0) {
                document.getElementById("completed").style.display = "none";
            };
        }, false);

        // adding event listener to rebo button
        redoBtn.addEventListener("click", (e) => {
            confirm('WANT TO REDO THIS TASK');
            e.target.parentElement.remove();
            itemList.appendChild(e.target.parentElement);
            redoBtn.id = "complete-btn";
            redoBtn.innerHTML = 'Completed';
            confirm('ARE YOU SURE YOU WANT TO REMOVE THIS TASK ? '); // issue is here
            if (document.getElementById("completed").querySelectorAll("p").length === 0) {
                document.getElementById("completed").style.display = "none";
            };
        }, false);

    };
    if (document.querySelectorAll("p").length === 0) {
        errMsg2.style.display = "block";
    }

}, false);