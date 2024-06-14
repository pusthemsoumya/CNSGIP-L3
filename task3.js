document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const dueDateInput = document.getElementById("dueDate");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");
  
    addBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  
    function addTask() {
      const taskText = taskInput.value.trim();
      const dueDate = dueDateInput.value;
      if (taskText !== "") {
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.innerHTML = `
          <span>${taskText}</span>
          <span>${dueDate}</span>
          <div class="buttons">
            <button class="deleteBtn">Delete</button>
          </div>
        `;
        const deleteBtn = li.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", () => {
          li.remove();
        });
        li.addEventListener("click", () => {
          li.classList.toggle("completed");
        });
        taskList.appendChild(li);
        taskInput.value = "";
        dueDateInput.value = "";
      } else {
        alert("Please enter a task!");
      }
    }
  });