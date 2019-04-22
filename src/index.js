function handleSubmit(e) {
  const username = document.querySelector(".username").value;
  console.log(username);
  const password = document.querySelector(".password").value;
  console.log(password);
  if (username && password) {
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password })
    });
  }
}

document.querySelector(".submitButton").addEventListener("click", handleSubmit);
