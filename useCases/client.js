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

  if (value === "Streamlined Communication ....") {
    let one = document.createElement("h1");
    one.innerText = "Streamlined Communication";

    let two = document.createElement("p");
    two.innerText =
      "A space for your team and clients to share ideas, gather feedback, finalize specs, and turn discussions into actions.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.1450581.webp";

    maindata.append(one, two, three);
  } else if (value === "Automated Reporting ....") {
    let one = document.createElement("h1");
    one.innerText = "Automated Reporting";

    let two = document.createElement("p");
    two.innerText =
      "Set your project milestones and Nifty will automate your progress reporting based on the completion of associated tasks.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
  } else if (value === "Centralized Deliverables ....") {
    let one = document.createElement("h1");
    one.innerText = "Centralized Deliverables";

    let two = document.createElement("p");
    two.innerText =
      "Share, store, and retrieve project assets to let your clients see and grab whatever they need without asking.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.e8b1696.webp";

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
