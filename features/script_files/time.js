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

  if (value === "Improve Productivity ....") {
    let one = document.createElement("h1");
    one.innerText = "Improve Productivity";

    let two = document.createElement("p");
    two.innerText =
      "Team members can track time on tasks to stay on top of their workloads and billable hours.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.dbf3a50.webp";

    maindata.append(one, two, three);
  } else if (value === "Track Costs ....") {
    let one = document.createElement("h1");
    one.innerText = "Track Costs";

    let two = document.createElement("p");
    two.innerText =
      "Receive insights on the entirety of a project’s timelogs by tasks and team members.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.d6b2caf.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
  } else if (value === "Balance Team Workloads ....") {
    let one = document.createElement("h1");
    one.innerText = "Balance Team Workloads";

    let two = document.createElement("p");
    two.innerText =
      "Reference tracked hours from the Team Overview tab to keep your entire team’s workloads in check.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.455934f.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
    console.log("Discussions ....");
  }
};
