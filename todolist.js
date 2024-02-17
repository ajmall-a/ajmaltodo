// function retrieveTasks() {
//     return fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => response.json());
//   }
  
//   function displayTasks(tasks) {
//     const todoList = document.getElementById('todoList');
//     let completedTaskCount = 0;
  
//     tasks.forEach(task => {
//         const listItem = document.createElement('li');
  
//         const checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         checkbox.id = `task-${task.id}`;
//         checkbox.checked = false;
//         const label = document.createElement('label');
//         label.textContent = task.title;
//         label.htmlFor = `task-${task.id}`;
  
//         listItem.appendChild(checkbox);
//         listItem.appendChild(label);
  
//         todoList.appendChild(listItem);
  
//         checkbox.addEventListener('change', () => {
//             if (checkbox.checked) {
//                 completedTaskCount++;
//                 checkbox.disabled = true; 
//             } else {
//                 completedTaskCount--;
//                 checkbox.disabled = false; 
//             }
  
//             if (completedTaskCount % 5 === 0) {
//                 alert(`Congratulations. ${completedTaskCount} Tasks have been Successfully Completed`);
//             }
//         });
//     });
//   }
  
//   function fnmain() {
//     retrieveTasks()
//         .then(displayTasks)
//         .catch(error => console.error('Error retrieving tasks:', error));
//   }
  
//   fnmain();

const url = "https://jsonplaceholder.typicode.com/todos";
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    const todosList = document.getElementById("todos-list");
    let checkedCount = 0;
    data.forEach((todo) => {
      const listItem = document.createElement("li");
      const checkbox = document.createElement("input");
      const label = document.createElement("label");

      checkbox.type = "checkbox";
      checkbox.class = todo; 
      checkbox.checked = todo.completed;
      checkbox.disabled = todo.completed;
      checkbox.style.marginLeft = "50px";
      label.for = todo;
      label.textContent = `${todo.title}`;
      label.appendChild(checkbox);
    
      checkbox.addEventListener("change", () => {
        setTimeout(() => {
          if (checkbox.checked) {
            checkedCount++;
         
            if (checkedCount === 5) {
          
              const promising = new Promise((resolve, reject) => {
                resolve();
              });

          
              promising.then(() => {
                alert(`Congrats. 5 Tasks have been Successfully Completed`);
                checkbox.class = disable; 
              });
            }
          }
        }, 1000);
      });

      listItem.appendChild(label);
      todosList.appendChild(listItem);
    });
  } else {
    console.error("Error fetching data:", xhr.statusText);
  }
};

xhr.onerror = function () {
  console.error("Error sending request:", xhr.statusText);
};

xhr.send();

