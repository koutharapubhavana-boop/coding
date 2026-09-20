let tasks = [];

let currentFilter = "all";


function addTask() {

    let taskInput = document.getElementById("taskInput");

    let dueDate = document.getElementById("dueDate").value;

    let priority = document.getElementById("priority").value;

    let taskName = taskInput.value.trim();

    if (taskName == "") {

        alert("Please enter a task");

        return;
    }

    let task = {

        id: Date.now(),

        name: taskName,

        dueDate: dueDate,

        priority: priority,

        completed: false,

        important: false

    };

    tasks.push(task);

    saveTasks();

    taskInput.value = "";

    document.getElementById("dueDate").value = "";

    displayTasks();

}


function displayTasks() {

    let taskList = document.getElementById("taskList");

    let searchText =
        document.getElementById("searchInput").value.toLowerCase();

    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(function(task) {

        let matchesSearch =
            task.name.toLowerCase().includes(searchText);

        if (currentFilter == "active") {

            return matchesSearch && !task.completed;

        }

        else if (currentFilter == "completed") {

            return matchesSearch && task.completed;

        }

        else if (currentFilter == "important") {

            return matchesSearch && task.important;

        }

        else {

            return matchesSearch;

        }

    });


    if (filteredTasks.length == 0) {

        document.getElementById("emptyMessage").style.display = "block";

    }

    else {

        document.getElementById("emptyMessage").style.display = "none";

    }


    filteredTasks.forEach(function(task) {

        let li = document.createElement("li");

        li.className = "task";

        if (task.completed) {

            li.classList.add("completed");

        }


        let priorityText = "Priority: " + task.priority;

        let dateText = task.dueDate
            ? "Due: " + task.dueDate
            : "No due date";


        li.innerHTML = `

            <div class="task-info">

                <div class="task-name">

                    ${task.important ? "⭐ " : ""}

                    ${task.name}

                </div>

                <div class="task-details">

                    ${priorityText} | ${dateText}

                </div>

            </div>


            <div class="task-buttons">

                <button
                    class="complete-button"
                    onclick="completeTask(${task.id})">
                    ✓
                </button>

                <button
                    class="important-button"
                    onclick="importantTask(${task.id})">
                    ⭐
                </button>

                <button
                    class="edit-button"
                    onclick="editTask(${task.id})">
                    ✏
                </button>

                <button
                    class="delete-button"
                    onclick="deleteTask(${task.id})">
                    🗑
                </button>

            </div>

        `;

        taskList.appendChild(li);

    });


    updateStatistics();

}


function completeTask(id) {

    tasks.forEach(function(task) {

        if (task.id == id) {

            task.completed = !task.completed;

        }

    });

    saveTasks();

    displayTasks();

}


function importantTask(id) {

    tasks.forEach(function(task) {

        if (task.id == id) {

            task.important = !task.important;

        }

    });

    saveTasks();

    displayTasks();

}


function deleteTask(id) {

    tasks = tasks.filter(function(task) {

        return task.id != id;

    });

    saveTasks();

    displayTasks();

}


function editTask(id) {

    let task = tasks.find(function(task) {

        return task.id == id;

    });


    let newName = prompt("Edit your task:", task.name);


    if (newName != null && newName.trim() != "") {

        task.name = newName.trim();

        saveTasks();

        displayTasks();

    }

}


function setFilter(filter) {

    currentFilter = filter;

    displayTasks();

}


function updateStatistics() {

    let total = tasks.length;

    let completed = tasks.filter(function(task) {

        return task.completed;

    }).length;

    let pending = total - completed;


    document.getElementById("totalTasks").innerHTML = total;

    document.getElementById("completedTasks").innerHTML = completed;

    document.getElementById("pendingTasks").innerHTML = pending;

}


function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


function loadTasks() {

    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks != null) {

        tasks = JSON.parse(savedTasks);

    }

    displayTasks();

}


function toggleDarkMode() {

    document.body.classList.toggle("dark");

}


document.getElementById("taskInput").addEventListener(
    "keypress",
    function(event) {

        if (event.key == "Enter") {

            addTask();

        }

    }
);


loadTasks();