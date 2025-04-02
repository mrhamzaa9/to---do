let totalTasks = 0;
let completedTasks = 0;

function updateCounts() {
    document.getElementById('total-tasks').textContent = totalTasks;
    document.getElementById('completed-tasks').textContent = completedTasks;
}

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim() ;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    totalTasks++;
    updateCounts();

    const taskList = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Mark Complete Button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.style.background = 'rgb(43, 224, 248)';
    completeButton.classList.add('btn', 'btn-complete');
    completeButton.onclick = function () {
        if (!taskSpan.classList.contains('completed')) {
            taskSpan.classList.add('completed');
            completeButton.style.background ='  #e0e0e0';
            completedTasks++;
        } else {
            taskSpan.classList.remove('completed');
            completedTasks--;
        }
        updateCounts();
    };

    // Edit Button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.style.background ='rgb(85, 234, 85)';
    editButton.classList.add('btn', 'btn-edit');
    editButton.onclick = function () {
        const newTask = prompt('Edit your task:', taskSpan.textContent);
        if (newTask !== null && newTask !== '') {
            taskSpan.textContent = newTask;
        }
    };

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.background ='rgb(237, 80, 80)';

    deleteButton.classList.add('btn', 'btn-delete');
    deleteButton.onclick = function () {
        taskList.removeChild(listItem);
        totalTasks--;
        if (taskSpan.classList.contains('completed')) {
            completedTasks--;
        }
        updateCounts();
    };
    // new Element adding
    listItem.appendChild(taskSpan);
    listItem.appendChild(completeButton);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);

    taskInput.value ='';
}




