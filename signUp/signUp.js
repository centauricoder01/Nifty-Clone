function signUp() {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let userArray = JSON.parse(localStorage.getItem("users")) || [];
  localStorage.setItem("email", JSON.stringify(email));
  if (email == "" || password == "") {
    alert("Please fill the details.");
  } else {
    let data = {
      email,
      password,
    };
    userArray.push(data);
    localStorage.setItem("users", JSON.stringify(userArray));
    window.location = "/login/workspace/workspace.html";
  }
}
