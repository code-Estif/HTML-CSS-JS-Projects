let tasks = [];

    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    // Display tasks
    function displayTasks() {
      taskList.innerHTML = "";
      tasks.map((task, index) => {
        let li = document.createElement("li");
        li.className = task.done ? "done" : "";
        li.innerHTML = `
          <span>${task.text}</span>
          <div>
            <button onclick="toggleTask(${index})">✔</button>
            <button class="delete-btn" onclick="deleteTask(${index})">✖</button>
          </div>
        `;
        taskList.appendChild(li);
      });
    }

    // Add task
    addBtn.onclick = () => {
      let text = taskInput.value.trim();
      if (text) {
        tasks.push({ text: text, done: false }); // push()
        taskInput.value = "";
        displayTasks();
      }
    };

    // Toggle done/undone
    function toggleTask(index) {
      tasks[index].done = !tasks[index].done; // switch state
      displayTasks();
    }

    // Delete task
    function deleteTask(index) {
      tasks.splice(index, 1); // splice()
      displayTasks();
    }

    // Enter key adds task
    taskInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") addBtn.click();
    });

    // Initial display
    displayTasks();