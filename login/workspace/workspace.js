function showEmail() {
  let email = JSON.parse(localStorage.getItem("email"));
  console.log(email);
  document.querySelector(".welcome").innerHTML = `
       Welcome , ${email} !
       `;
}
showEmail();
function workspace() {
  window.location = "/login/create/create.html";
}
