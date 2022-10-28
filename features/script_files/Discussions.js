let Para_tag = document.querySelectorAll(".Para_tag");
console.log("radff");
for (let i = 0; i < Para_tag.length; i++) {
  Para_tag[i].addEventListener("click", () => {
    showImgOnWebpage(Para_tag[i].innerText);
  });
}

let maindata = document.getElementById("changing_data");
let showImgOnWebpage = (value) => {
  maindata.innerHTML = "";

  if (value === "Facilitate Ideas ....") {
    let one = document.createElement("h1");
    one.innerText = "Facilitate Ideas";

    let two = document.createElement("p");
    two.innerText =
      "Discussions enable real-time collaboration amongst project members to share ideas, collect feedback, and take meaningful decisions.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.0e4d758.webp";

    maindata.append(one, two, three);
  } else if (value === "Take Actions ....") {
    let one = document.createElement("h1");
    one.innerText = "Take Actions";

    let two = document.createElement("p");
    two.innerText =
      "Turn project discussions into quick-actions by converting a message into a task, or by creating a doc and auto-inviting all project members.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.f9c0f43.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
  } else if (value === "Stay Connected ....") {
    let one = document.createElement("h1");
    one.innerText = "Stay Connected";

    let two = document.createElement("p");
    two.innerText =
      "Direct messages enable teammates to communicate outside of projects to stay better connected with everyone and everything.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.efa8b54.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
    console.log("Discussions ....");
  }
};
