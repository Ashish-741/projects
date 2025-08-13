// Select all parts of the program
const input = document.getElementById("task-input");
const additem = document.getElementById("add-task");
const tasklist = document.getElementById("task-list");

// Add task on button click
additem.addEventListener("click", () => {
    let tasktext = input.value.trim();
    if (tasktext === "") return;

    createTaskElement(tasktext, false); // default not completed
    input.value = "";
    storeLocalStorage();
});

// Create task item
function createTaskElement(tasktext, completed) {
    let task = document.createElement("li");
    task.textContent = tasktext;

    // ✅ Mark task as completed on click
    task.addEventListener("click", () => {
        task.classList.toggle("completed");//toggle is used to create an element if it is not there or delete an elemnt if it is there.
        storeLocalStorage();
    });

    // Restore completed state
    if (completed) {
        task.classList.add("completed");
    }

    // Delete button
    let deletebutton = document.createElement("button");
    deletebutton.textContent = "❌";
    deletebutton.style.marginLeft = "10px";
    deletebutton.style.cursor="pointer";
    deletebutton.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent toggle when deleting
        tasklist.removeChild(task);
        storeLocalStorage();
    });
    tasklist.style.marginLeft="45%";
    task.appendChild(deletebutton);
    tasklist.appendChild(task);
}

// Store tasks and their completed status
function storeLocalStorage() {
    let tasks = [];
    tasklist.querySelectorAll("li").forEach(item => {
        const text = item.firstChild.textContent;
        const completed = item.classList.contains("completed");
        tasks.push({ text, completed });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load saved tasks on page load
function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if (!saved) return;

    const tasks = JSON.parse(saved);
    tasks.forEach(task => {
        createTaskElement(task.text, task.completed);
    });
}

window.addEventListener("DOMContentLoaded", loadTasks);
