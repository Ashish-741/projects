// Selecting the necessary HTML elements
const input = document.getElementById("task-input");        // input field
const addButton = document.getElementById("add-task");      // add button
const taskList = document.getElementById("task-list");      // task container (ul or div)

// Event listener for adding a task
addButton.addEventListener("click", () => {
    const tasktext = input.value.trim();  // remove leading/trailing whitespace

    if (tasktext === "") {
        alert("Please enter a task.");
        return;
    }

    createTaskElement(tasktext);      // create and show the task
    input.value = "";                 // clear input field
    saveTasksToLocalStorage();        // update local storage
});

// Function to create a task item and append to the list
function createTaskElement(tasktext) {
    const listItem = document.createElement("li");
    listItem.textContent = tasktext;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.cursor = "pointer";

    // Append delete button to the list item
    listItem.appendChild(deleteBtn);

    // Append the new list item to the task list
    taskList.appendChild(listItem);

    // Add event listener to delete the task
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(listItem);
        saveTasksToLocalStorage();   // update local storage after delete
    });
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach(item => {
        const text = item.firstChild.textContent; // only the task text, not the ❌
        tasks.push(text);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    const saved = localStorage.getItem("tasks");
    if (!saved) return;

    const tasks = JSON.parse(saved);
    tasks.forEach(tasktext => {
        createTaskElement(tasktext);
    });
}

// Load tasks on page load
window.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);
