// Accessing HTML elements
const button = document.getElementById("btnClick");
const message = document.getElementById("message");

// Event listener for button click
button.addEventListener("click", function () {

    // Get input value
    const name = document.getElementById("username").value;

    // Event-driven logic
    if (name === "") {
        message.innerHTML = "Please enter your name!";
        message.style.color = "red";
    } else {
        message.innerHTML = "Hello " + name + "! Welcome to JavaScript Interactivity.";
        message.style.color = "green";
    }
});
