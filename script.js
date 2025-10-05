// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
  // Step 2: Select DOM Elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Step 3: Create the addTask Function
  function addTask() {
    // Retrieve and trim the input value
    const taskText = taskInput.value.trim();

    // Check if taskText is not empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Step 4: Task Creation and Removal
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.className = 'remove-btn';

    // Assign onclick event to remove task
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append remove button to li and li to taskList
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = "";
  }

  // Step 5: Attach Event Listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
