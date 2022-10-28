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

  if (value === "Prioritize Insights ....") {
    let one = document.createElement("h1");
    one.innerText = "Prioritize Insights";

    let two = document.createElement("p");
    two.innerText =
      "Toggle specific project modules on and off to selectively gain insights within the project.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.8bbe8cc.webp";

    maindata.append(one, two, three);
  } else if (value === "Customize Modules ....") {
    let one = document.createElement("h1");
    one.innerText = "Customize Modules";

    let two = document.createElement("p");
    two.innerText =
      "Each project member can arrange their project home screen to fit their role and needs in a project.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.fa5c8c0.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
  } else if (value === "Streamline Action ....") {
    let one = document.createElement("h1");
    one.innerText = "Streamline Action";

    let two = document.createElement("p");
    two.innerText =
      "Eliminate cross-module management by accessing all project related work directly from one place.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.4b6a505.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
    console.log("Discussions ....");
  }
};
