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

  if (value === "Set Timelines & Expectations ....") {
    let one = document.createElement("h1");
    one.innerText = "Set Timelines & Expectations";

    let two = document.createElement("p");
    two.innerText =
      "See what your team is working on and how changes will impact your deadlines.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.c8361c6.webp";

    maindata.append(one, two, three);
  } else if (value === "Communicate & Collaborate ....") {
    let one = document.createElement("h1");
    one.innerText = "Communicate & Collaborate";

    let two = document.createElement("p");
    two.innerText =
      " Real-time collaboration to share ideas, gather feedback, and take meaningful decisions.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.44e947a.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
  } else if (value === "Automate Client Reporting ....") {
    let one = document.createElement("h1");
    one.innerText = "Automate Client Reporting";

    let two = document.createElement("p");
    two.innerText =
      "Set your project deliverables and Nifty will automate your progress reporting based on the completion of associated tasks.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp";

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
