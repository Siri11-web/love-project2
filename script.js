function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "Lin Pyae Aung" && password === "171101") {
        loginBox.classList.add("hidden");
        questionBox.classList.remove("hidden");
    } else {
        message.innerText = "Wrong username or password!";
    }
}

function answerYes() {
    questionBox.innerHTML = "<h1>Yay! ❤️</h1><p>Wait for my response...</p>";
}

function answerNo() {
    questionBox.classList.add("hidden");
    reasonBox.classList.remove("hidden");
}

function submitReason() {
    let reason = document.getElementById("reason").value;

    fetch("YOUR_FORMSPREE_LINK_HERE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            answer: "No",
            reason: reason
        })
    });

    reasonBox.innerHTML = "<h1>Wait for response...</h1>";
}