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

  if (value === "Timeline View ....") {
    let one = document.createElement("h1");
    one.innerText = "Timeline View";

    let two = document.createElement("p");
    two.innerText =
      "Create team alignment around project goals and sprints by visualizing milestones in a gantt chart.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.86463b4.webp";

    maindata.append(one, two, three);
  } else if (value === "Swimlane View ....") {
    let one = document.createElement("h1");
    one.innerText = "Swimlane View";

    let two = document.createElement("p");
    two.innerText =
      "Pilot objectives more efficiently by intersecting project milestones and tasks using the swimlane view.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.950d270.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
  } else if (value === "Master Overview ....") {
    let one = document.createElement("h1");
    one.innerText = "Master Overview";

    let two = document.createElement("p");
    two.innerText =
      "Get a birds-eye view of all your projects with your team's deadlines and priorities in the master overview.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.21f07e5.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
    console.log("Discussions ....");
  }
};
