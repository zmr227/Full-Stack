// add this timeout to 
window.setTimeout(function() {

    var command = prompt("What would you like to do?");
    var todoList = new Array();

    while (command !== "quit") {
        if (command.indexOf("new") !== -1) {
            var todo = prompt("Enter a new todo");
            todoList.push(todo);
        } else if (command.includes("list")) {
            console.log(todoList);
        }
        command = prompt("What would you like to do?");
    }
}, 500);