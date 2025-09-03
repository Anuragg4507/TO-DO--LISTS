 
function addtasks() {
    const newTask = document.createElement('li');
    const taskslists = document.getElementById('taskslists');
    
    newTask.textContent = document.getElementById('inputTask').value;
    taskslists.appendChild(newTask);

    document.getElementById('inputTask').value = "";

    deletetasks(newTask);
}

function deletetasks(newTask) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);

    deleteBtn.onclick = function () {
        newTask.remove();
    };
}