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

  if (value === "Project Overview ....") {
    let one = document.createElement("h1");
    one.innerText = "Project Overview";

    let two = document.createElement("p");
    two.innerText =
      "Get a bird's eye view across all project's in your organization or portfolio with Project Overview.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@2x.a7ce51f.webp";

    maindata.append(one, two, three);
  } else if (value === "Workloads ....") {
    let one = document.createElement("h1");
    one.innerText = "Workloads";

    let two = document.createElement("p");
    two.innerText =
      "View your entire team's tasks, activities, and time logs to balance workloads in your organization.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@2x.17bc5ae.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
  } else if (value === "All Tasks ....") {
    let one = document.createElement("h1");
    one.innerText = "All Tasks";

    let two = document.createElement("p");
    two.innerText =
      "Filter upcoming and overdue tasks by teammates, tags, projects, and more for detailed task management.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@2x.af769c0.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
    console.log("Discussions ....");
  }
};
