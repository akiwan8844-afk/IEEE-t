function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === "") {
        return;
    }

    let tasksDiv = document.getElementById("tasks");

    let taskDiv = document.createElement("div");
    taskDiv.className = "task";

    let span = document.createElement("span");
    span.innerText = taskText;

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.className = "done";
    doneBtn.onclick = function () {
        span.classList.toggle("completed");
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = function () {
        taskDiv.remove();
    };

    taskDiv.appendChild(span);
    taskDiv.appendChild(doneBtn);
    taskDiv.appendChild(deleteBtn);

    tasksDiv.appendChild(taskDiv);

    input.value = "";
}
