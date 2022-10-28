let Para_tag = document.querySelectorAll(".Para_tag");

for (let i = 0; i < Para_tag.length; i++) {
  Para_tag[i].addEventListener("click", () => {
    showImgOnWebpage(Para_tag[i].innerText);
    console.log(Para_tag[i]);
  });
}

let maindata = document.getElementById("changing_data");
let showImgOnWebpage = (value) => {
  console.log("yes");
  maindata.innerHTML = "";

  if (value === "Strategize Product Decisions ....") {
    let one = document.createElement("h1");
    one.innerText = "Strategize Product Decisions";

    let two = document.createElement("p");
    two.innerText =
      "Discuss ideas, collect feedback, and collaborate amongst project stakeholders for meaningful decision making.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.1450581.webp";

    maindata.append(one, two, three);
  } else if (value === "Define Product Milestones ....") {
    let one = document.createElement("h1");
    one.innerText = "Define Product Milestone";

    let two = document.createElement("p");
    two.innerText =
      "Build a visual roadmap for your product by defining milestones and adding tasks for automated progress tracking.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp";

    maindata.append(one, two, three);
  } else if (value === "Prioritize Product Features ....") {
    let one = document.createElement("h1");
    one.innerText = "Prioritize Product Features";

    let two = document.createElement("p");
    two.innerText =
      "Prioritize features by creating custom story maps using Kanban, List, or Swimlane views to focus on work that matters.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.16f95bf.webp";

    maindata.append(one, two, three);
  }
};
