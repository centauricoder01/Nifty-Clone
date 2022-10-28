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

  if (value === "Portfolios ....") {
    let one = document.createElement("h1");
    one.innerText = "Portfolios";

    let two = document.createElement("p");
    two.innerText =
      "Create portofolios based on attorneys, or case types to manage and track your case statuses in real-time.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.9444893.webp";

    maindata.append(one, two, three);
  } else if (value === "Progress Reporting ....") {
    let one = document.createElement("h1");
    one.innerText = "Progress Reporting";

    let two = document.createElement("p");
    two.innerText =
      "Visualize key milestones and deadlines for the major events in each of your cases and automate their progress by completing relevant tasks.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.448d33e.webp";

    maindata.append(one, two, three);
  } else if (value === "Organization ....") {
    let one = document.createElement("h1");
    one.innerText = "Organization";

    let two = document.createElement("p");
    two.innerText =
      "Create, store, and share files, documents, notes, and communications for each of your cases using dedicated projects.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.a3b435f.webp";

    maindata.append(one, two, three);
  }
};
