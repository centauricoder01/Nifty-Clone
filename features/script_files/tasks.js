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

  if (value === "Kanban View ....") {
    let one = document.createElement("h1");
    one.innerText = "Kanban View";

    let two = document.createElement("p");
    two.innerText =
      "Better plan your projects and keep a track of your timelines to never let anything fall through the cracks.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.102ba6f.webp";

    maindata.append(one, two, three);
  } else if (value === "List View ....") {
    let one = document.createElement("h1");
    one.innerText = "List View";

    let two = document.createElement("p");
    two.innerText =
      "Give structure to your work by customizing, grouping, filtering, and performing bulk actions using List view.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.16f95bf.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
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
