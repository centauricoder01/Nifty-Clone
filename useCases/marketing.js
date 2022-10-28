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
  if (value === "Visualize Campaign Schedules ....") {
    let one = document.createElement("h1");
    one.innerText = "Visualize Campaign Schedules";

    let two = document.createElement("p");
    two.innerText =
      "Plan campaign schedules using milestones with start and end dates to ensure marketing efforts are coordinated, consistent, and visually trackable.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.ba76fb1.webp";

    maindata.append(one, two, three);
  } else if (value === "Manage Campaign Tracking ....") {
    let one = document.createElement("h1");
    one.innerText = "Manage Campaign Tracking";

    let two = document.createElement("p");
    two.innerText =
      "Create tasks, set deadlines, and assign members so everyone knows their responsibilities. Customize tasklists to fit your workflow and solicit client or manager approval.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.16f95bf.webp";

    maindata.append(one, two, three);
  } else if (value === "Consolidate Campaign Assets ....") {
    let one = document.createElement("h1");
    one.innerText = "Consolidate Campaign Assets";

    let two = document.createElement("p");
    two.innerText =
      "Consolidate all of the creatives for upcoming emails, ads, and other campaigns, as everything uploaded to the project can be found and sorted in the Files section of the project.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.e8b1696.webp";

    maindata.append(one, two, three);
  }
};
