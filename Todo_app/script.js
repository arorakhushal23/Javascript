const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let tasks = [];


// Save tasks
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Create Task
function createTask(task) {

    const li = document.createElement("li");

    const div = document.createElement("div");
    div.className = "task";
    div.style.border="2px solid black"

    const taskText = document.createElement("span");
    taskText.textContent = task;
  

    div.appendChild(taskText);
    
    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {

        const index = tasks.indexOf(task);

        if (index !== -1) {
            tasks.splice(index, 1);
            saveTasks();
        }

        li.remove();

    });

    div.appendChild(deleteButton);

    // Edit Button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";

    editButton.addEventListener("click", function () {

        input.value = task;

        const index = tasks.indexOf(task);

        if (index !== -1) {
            tasks.splice(index, 1);
            saveTasks();
        }

        li.remove();

    });

    div.appendChild(editButton);

    li.appendChild(div);

    list.appendChild(li);
    deleteButton.className = "delete-btn";
editButton.className = "edit-btn";
}


// Load Tasks
function loadTasks() {

    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {

        tasks = JSON.parse(savedTasks);

        tasks.forEach(function (task) {

            createTask(task);

        });

    }

}

loadTasks();

// Add Task
button.addEventListener("click", function () {

    const task = input.value.trim();

    if (task === "") {
        alert("Enter the task!");
        return;
    }

    tasks.push(task);
    saveTasks();

    createTask(task);

    input.value = "";

});