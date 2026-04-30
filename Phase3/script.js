// Form Validation
function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (username === "" || password === "") {
        error.innerText = "All fields are required!";
        return false;
    }

    if (password.length < 6) {
        error.innerText = "Password must be at least 6 characters!";
        return false;
    }

    error.innerText = "";
    alert("Login Successful!");
    return true;
}

// Dynamic List
function addItem() {
    let input = document.getElementById("item").value;
    if (input === "") return;

    let li = document.createElement("li");
    li.textContent = input;

    document.getElementById("list").appendChild(li);
}

// To-Do List
function addTask() {
    let task = document.getElementById("task").value;
    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    document.getElementById("todo").appendChild(li);
}

// Toggle
function toggleText() {
    let text = document.getElementById("text");

    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}
