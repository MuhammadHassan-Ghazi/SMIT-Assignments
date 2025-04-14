//To track index of todo for edit
let editIndex = null;

var todoList = document.getElementById("todoList");

// Load from localStorage on page load
window.onload = function () {
    var todos = getTodosFromStorage();
    todos.forEach((todo ,index)=> {
        createTodoElement(todo.title, todo.description,index);
    });
};

function addTodo(){   
    var txtTitle = document.getElementById("txttitle");
    var txtDescription = document.getElementById("txtDescription");
    var title = txtTitle.value.trim()
    var description = txtDescription.value.trim()
    if(!title)
    {
        alert("Required : Title")
        return
    }

    var todos = getTodosFromStorage();
    if (editIndex !== null) {
        // Editing existing todo
        todos[editIndex] = { title, description };
        saveTodosToStorage(todos);

        // Clear and reload the UI
        todoList.innerHTML = "";
        todos.forEach((todo, i) => {
            createTodoElement(todo.title, todo.description, i);
        });

        // Reset edit mode
        editIndex = null;
        document.getElementById("addBtn").innerText = "Add Todo";
    }else{
        var isExist =  todos.some(todo => todo.title.toLowerCase() === title.toLowerCase());
        if(isExist)
        {
            alert("A todo with this title already exists!");
            return
        }
        
        // Create and show on UI
        createTodoElement(title, description);

        // Save to localStorage
        
        todos.push({ title, description });
        saveTodosToStorage(todos);
    }

    txtTitle.value = txtDescription.value = ""
}

function createTodoElement(title, description,index){
    var div = document.createElement("div")
    div.style.padding = "5px"
    div.style.marginBottom = "5px"
    div.style.border = "2px solid #fff"
    //div.style.width = "60%"
    div.style.width = "100%";
    div.style.maxWidth = "600px";
    div.style.backgroundColor = "#fff"
    div.style.borderRadius = "5px"

    var h2 = document.createElement("h2")
    h2.innerHTML = title
    h2.style.marginBottom = "5px"
    div.appendChild(h2)

    var p = document.createElement("p")
    p.innerHTML = description
    div.appendChild(p)

    var button = document.createElement("button")
    button.onclick = function () {
        editTodo(title, description,index);
    };
    button.innerHTML = "Edit"
    button.style.border = "none"
    button.style.marginTop = "5px"
    button.style.padding = "10px"
    button.style.color = "white"
    button.style.backgroundColor = "#046133"
    button.style.borderRadius = "5px"
    button.style.cursor = "pointer"
    div.appendChild(button)

    button = document.createElement("button")
    button.onclick = function () {
        deleteTodo(this,title);
    };
    button.innerHTML = "Delete"
    button.style.border = "none"
    button.style.marginTop = "5px"
    button.style.marginLeft = "5px"
    button.style.padding = "10px"
    button.style.color = "white"
    button.style.backgroundColor = "#81171A"
    button.style.borderRadius = "5px"
    button.style.cursor = "pointer"
    div.appendChild(button)


    todoList.appendChild(div)
}

function editTodo(title, description,index){
    document.getElementById("txttitle").value = title;
    document.getElementById("txtDescription").value = description;
    editIndex = index;

    document.getElementById("addBtn").innerText = "Update Todo";
}


function deleteTodo(element,titleToDelete){
    if(todoList.children.length > 0){
        todoList.removeChild(element.parentNode)

        // Remove from localStorage
        var todos = getTodosFromStorage();
        var updatedTodos = todos.filter(todo => todo.title !== titleToDelete);
        saveTodosToStorage(updatedTodos);
    }
}

function getTodosFromStorage() {
    var todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
}

function saveTodosToStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}