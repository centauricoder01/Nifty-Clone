function loginUser() {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  localStorage.setItem("email", JSON.stringify(email));
  if (email == "" || password == "") {
    alert("Please fill the details.");
  } else {
    let data = {
      email,
      password,
    };
    let userData = JSON.parse(localStorage.getItem("users"));
    let flag = false;
    for (let i = 0; i < userData.length; i++) {
      if (
        userData[i].email == data.email &&
        userData[i].password == data.password
      ) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    if (flag == true) {
      window.location = "/login/workspace/workspace.html";
    } else {
      alert("User not found. Please enter correct details.");
    }
  }
}
function signUp() {
  window.location = "/signUp/signUp.html";
}
