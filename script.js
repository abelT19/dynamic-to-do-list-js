// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't save again to Local Storage
  }

  // Function to add a task
  function addTask(taskText = null, save = true) {
    // If called from input, retrieve trimmed value
    if (taskText === null) {
      taskText = taskInput.value.trim();
    }

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('remove-btn');

    // Remove task on click and update Local Storage
    removeButton.onclick = function () {
      taskList.removeChild(li);
      updateLocalStorage();
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field if task was added from input
    if (taskText === taskInput.value.trim()) {
      taskInput.value = "";
    }

    // Save to Local Storage if needed
    if (save) {
      updateLocalStorage();
    }
  }

  // Function to update tasks in Local Storage
  function updateLocalStorage() {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
      // Remove "Remove" text from li
      const taskName = li.firstChild.textContent;
      tasks.push(taskName);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Event listeners
  addButton.addEventListener('click', () => addTask());
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Load existing tasks when page loads
  loadTasks();
});
