// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const clearCompletedButton = document.getElementById('clearCompletedButton');

    // Function to add a new task
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;
            taskItem.addEventListener('click', () => {
                taskItem.classList.toggle('completed');
            });
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('removeTaskButton');
            removeButton.addEventListener('click', () => {
                taskList.removeChild(taskItem);
            });

            taskItem.appendChild(removeButton);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });

    // Function to clear completed tasks
    clearCompletedButton.addEventListener('click', () => {
        const completedTasks = document.querySelectorAll('.completed');
        completedTasks.forEach(task => {
            taskList.removeChild(task);
        });
    });
});
