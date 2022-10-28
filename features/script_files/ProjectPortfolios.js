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

  if (value === "Organize Projects ....") {
    let one = document.createElement("h1");
    one.innerText = "Organize Projects";

    let two = document.createElement("p");
    two.innerText =
      "Folder your projects into portfolio teams based on operations, account ownership, client delivery, or more.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.e5591ac.webp";

    maindata.append(one, two, three);
  } else if (value === "Portfolio Overview ....") {
    let one = document.createElement("h1");
    one.innerText = "Portfolio Overview";

    let two = document.createElement("p");
    two.innerText =
      "Gather high-level insights of the projects within a portfolio such as current status and team members.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.f707905.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
  } else if (value === "Portfolio Dashboard ....") {
    let one = document.createElement("h1");
    one.innerText = "Portfolio Dashboard";

    let two = document.createElement("p");
    two.innerText =
      "Pilot objectives more efficiently by intersecting project milestones and tasks using the swimlane view.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.6859ebd.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
    console.log("Discussions ....");
  } else if (value === "Timeline View ....") {
    let one = document.createElement("h1");
    one.innerText = "Timeline View";

    let two = document.createElement("p");
    two.innerText =
      "Better plan your projects and keep a track of your timelines to never let anything fall through the cracks.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.102ba6f.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
    console.log("Discussions ....");
  } else if (value === "Calendar View ....") {
    let one = document.createElement("h1");
    one.innerText = "Calendar View";

    let two = document.createElement("p");
    two.innerText =
      "Plan tasks in daily, weekly, or monthly contexts with Calendars. Drag and drop to schedule any task.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.102ba6f.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
    console.log("Discussions ....");
  }
};
