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

  if (value === "Collaborative Docs ....") {
    let one = document.createElement("h1");
    one.innerText = "Collaborative Docs";

    let two = document.createElement("p");
    two.innerText =
      "Create collaborative documents with team members and store them with your projects. Choose between a Nifty Doc or a Google Doc, Spreadsheet, or Presentation which syncs with your Google Drive.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.57ce89c.webp";

    maindata.append(one, two, three);
  } else if (value === "Organized File Storage ....") {
    let one = document.createElement("h1");
    one.innerText = "Organized File Storage";

    let two = document.createElement("p");
    two.innerText =
      "Upload files from your Computer, Dropbox, or Google Drive, and auto-sort your project files by type for quick access.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.457f24c.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
  } else if (value === "File Proofing ....") {
    let one = document.createElement("h1");
    one.innerText = "File Proofing";

    let two = document.createElement("p");
    two.innerText =
      "Streamline your creative feedback process with Proofing by automatically creating subtasks based on the comments left on the content.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.c3fcbc9.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
    console.log("Discussions ....");
  }
};
