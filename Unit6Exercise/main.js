var todos = [
    { job: "Walk the Dog", done: true },
    { job: "Take out trash", done: true },
    { job: "Do Homework", done: false },
    { job: "Practice JavaScript", done: false }
];

var todoList = document.getElementById("todo-list");

var len = todos.length;

for(var i =0; i < len; i++) {
    
    var list = document.createElement("li");
    todoList.appendChild(list);
    list.innerHTML = todos[i].job;
    if(todos[i].done)
        list.className = "done";
                
}