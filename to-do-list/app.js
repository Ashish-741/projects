let input=document.getElementById("task-input");
//input=<input type="text" id="task-input" placeholder="Enter your task">

let task=document.getElementById("add-task");
//task=<button id="add-task">Add Task</button>

let task_list=document.getElementById("task-list");
// task_list=<ul id="task-list"></ul>

//adding click event to the button so, 
// it create a list element and append it to the task list

task.addEventListener("click",() => {

    const tasktext=input.value.trim;
    if(tasktext==="V"){
        alert("please enter a task: ");
        return;
    }

    const listitem=document.createElement("li");
    listitem.textContent=input.value;
    
    const deletebtn=document.createElement("button");
    deletebtn.textContent="X";
    listitem.appendChild(deletebtn);

    task_list.appendChild(listitem);
    input.value="";

    deletebtn.addEventListener("click",() => {
        task_list.removeChild(listitem);
    });
});