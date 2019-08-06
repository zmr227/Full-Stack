// add this timeout to 
window.setTimeout(function() {

    var command = prompt("What would you like to do?");
    var todoList = new Array();

    while (command !== "quit") {
        if (command.indexOf("new") !== -1) {
            addTodo();
        } else if (command.includes("list")) {
            showList();
        } else if (command === "delete") {
            deleteTodo();
        }
        command = prompt("What would you like to do?");
    }
    console.log("OK, you quit the app.");

    function addTodo() {
        var todo = prompt("Enter a new todo");
        todoList.push(todo);
        console.log("Added!");
    }

    function showList() {
        console.log("**********");
        todoList.forEach(function(element, idx) {
            console.log(idx + ": " + element);
        });
        console.log("**********");
    }

    function deleteTodo() {
        var idx = Number(prompt("Enter index of todo to delete"));
        todoList.splice(idx, 1);
        console.log("Deleted!");
    }


}, 500);