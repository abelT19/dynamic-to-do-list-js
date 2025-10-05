// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn'); // Matches your HTML
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create list item and remove button
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
  }

  // Event listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
