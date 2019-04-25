function handleSubmit(e) {
  const username = document.querySelector(".username").value;
  console.log(username);
  const password = document.querySelector(".password").value;
  console.log(password);
  if (username && password) {
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
  }
}

document.querySelector(".submitButton").addEventListener("click", handleSubmit);

// socket things
document.querySelector(".submitSocket").addEventListener("click", sendSocket);

let socket = io('http://localhost:3000/socket'); // change url here

function sendSocket() {
  const eventName = document.querySelector(".eventName").value;
  console.log(eventName);
  const payload = document.querySelector(".payload").value || '';
  console.log(payload);
  if (eventName) {
    socket.emit(eventName, payload);
  }
}

// change event name here to whatever you want
socket.on("some event name", (data) => {
  console.log(data);
})
