document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
}