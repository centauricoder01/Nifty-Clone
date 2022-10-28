let play = document.getElementById("play").addEventListener("click", () => {
  let value = document.getElementById("video_trailer");
  let videos = document.querySelector("iframe");
  videos.src = "https://www.youtube.com/embed/5GaV5EZX22o";
  value.style.display = "block";
});

let cross = document
  .getElementById("cross_arrow")
  .addEventListener("click", () => {
    let value = document.getElementById("video_trailer");
    let videos = document.querySelector("iframe");
    videos.src = "none";
    value.style.display = "none";
  });

// part one of ramdom page

let Para_tag = document.querySelectorAll(".Para_tag");

for (let i = 0; i < Para_tag.length; i++) {
  Para_tag[i].addEventListener("click", () => {
    showImgOnWebpage(Para_tag[i].innerText);
  });
}

let maindata = document.getElementById("changing_data");
let showImgOnWebpage = (value) => {
  maindata.innerHTML = "";

  if (value === "Roadmaps ....") {
    let one = document.createElement("h1");
    one.innerText = "Set Goals & Timelines";

    let two = document.createElement("p");
    two.innerText =
      "Set a visual timeline for your big-picture goals and build team alignment by automating progress as tasks are completed.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.3b50ea1.webp";

    maindata.append(one, two, three);
  } else if (value === "Tasks ....") {
    let one = document.createElement("h1");
    one.innerText = "Collaborate on Tasks";

    let two = document.createElement("p");
    two.innerText =
      "Flexibly organize, prioritize, and track daily work with a high level of detail using Kanban, List, Timeline, Calendar, and Swimlane views.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.dd989ad.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
  } else if (value === "Discussions ....") {
    let one = document.createElement("h1");
    one.innerText = "Establish Knowledge Hub";

    let two = document.createElement("p");
    two.innerText =
      "Empower all members to share ideas, finalize specifications, & gather feedback in real-time with chat and one-click video calls.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.f90d042.webp";

    maindata.append(one, two, three);
    console.log("Tasks ....");
    console.log("Discussions ....");
  } else if (value === "Docs ....") {
    let one = document.createElement("h1");
    one.innerText = "Create Docs & Wikis";

    let two = document.createElement("p");
    two.innerText =
      "Create beautiful docs, notes, and wikis for your projects and share with anyone. Nifty even integrates natively with Google Docs.";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.e2a66e9.webp";

    maindata.append(one, two, three);
  } else {
    let one = document.createElement("h1");
    one.innerText = "Automate Reporting";

    let two = document.createElement("p");
    two.innerText =
      "Access automated progress reporting across all your projects and team activities to ensure operational clarity. ";

    let three = document.createElement("img");
    three.src = "https://niftypm.com/_nuxt/img/large@1x.8ff9db2.webp";

    maindata.append(one, two, three);
  }
};

// second part of random images

let Para_tag_part_2 = document.querySelectorAll(".Para_tag_part_2");

for (let i = 0; i < Para_tag_part_2.length; i++) {
  Para_tag_part_2[i].addEventListener("click", () => {
    Para_tag_calling_Part_2(Para_tag_part_2[i].innerHTML);
  });
}

let para_tag_main_data = document.getElementById("changing_data_part_2");

let Para_tag_calling_Part_2 = (values) => {
  para_tag_main_data.innerHTML = "";
  console.log(values);

  if (values === "Engineering ....") {
    let first = document.createElement("div");
    first.setAttribute("id", "first_Box");
    let second = document.createElement("div");
    second.setAttribute("id", "second_Box");
    let first_one = document.createElement("h1");
    first_one.innerText = "Engineering";

    let first_two = document.createElement("p");
    first_two.innerText =
      "Let go of fragmented tools. Plan, track, and manage your workflows with award-winning ease — in one collaborative workspace.";

    let first_three = document.createElement("p");
    first_three.innerText = "✅ Real-time progress reporting with Milestones";

    let first_four = document.createElement("p");
    first_four.innerText = "✅ Custom development workflows with if/then rules";

    let first_five = document.createElement("p");
    first_five.innerText =
      "✅ Manage issues, bugs, and changes directly in one place";

    let second_one = document.createElement("img");
    second_one.src = "https://niftypm.com/_nuxt/img/large@1x.c481d6e.webp";

    first.append(first_one, first_two, first_three, first_four, first_five);
    second.append(second_one);
    para_tag_main_data.append(first, second);
  } else if (values === "Sales ....") {
    let first = document.createElement("div");
    first.setAttribute("id", "first_Box");
    let second = document.createElement("div");

    let first_one = document.createElement("h1");
    first_one.innerText = "Sales";

    let first_two = document.createElement("p");
    first_two.innerText =
      "Empower your sales teams by adding flow to their work with real-time reporting and insights using automated workflows.";

    let first_three = document.createElement("p");
    first_three.innerText =
      "✅ Track lead status and values for pipeline visibility";

    let first_four = document.createElement("p");
    first_four.innerText =
      "✅ Create & store sales collateral for streamlined access";

    let first_five = document.createElement("p");
    first_five.innerText =
      "✅ Automate the creation of projects upon closing of leads";

    let second_one = document.createElement("img");
    second_one.src = "https://niftypm.com/_nuxt/img/large@1x.a9e1772.webp";

    first.append(first_one, first_two, first_three, first_four, first_five);
    second.append(second_one);
    para_tag_main_data.append(first, second);
  } else if (values === "Marketing ....") {
    let first = document.createElement("div");
    first.setAttribute("id", "first_Box");
    let second = document.createElement("div");

    let first_one = document.createElement("h1");
    first_one.innerText = "Marketing";

    let first_two = document.createElement("p");
    first_two.innerText =
      "Deliver better results with fewer tools. Manage tasks, campaigns, and marketing content with real-time collaboration in one place.";

    let first_three = document.createElement("p");
    first_three.innerText = "✅ Expedite approval for creatives with Proofing";

    let first_four = document.createElement("p");
    first_four.innerText =
      "✅ Create & track marketing campaigns as Milestones";

    let first_five = document.createElement("p");
    first_five.innerText =
      "✅ Align content schedules using Calendar View for Tasks";

    let second_one = document.createElement("img");
    second_one.src = "https://niftypm.com/_nuxt/img/large@1x.10c81ee.webp";

    first.append(first_one, first_two, first_three, first_four, first_five);
    second.append(second_one);
    para_tag_main_data.append(first, second);
  } else if (values === "Product ....") {
    let first = document.createElement("div");
    first.setAttribute("id", "first_Box");
    let second = document.createElement("div");

    let first_one = document.createElement("h1");
    first_one.innerText = "Product";

    let first_two = document.createElement("p");
    first_two.innerText =
      "Build better products with team alignment. Create clear product roadmaps and automate progress reporting as tasks are completed.";

    let first_three = document.createElement("p");
    first_three.innerText =
      "✅ Prioritize & track feature sprints as Milestones";

    let first_four = document.createElement("p");
    first_four.innerText = "✅ Build spec documents using Nifty or Google Docs";

    let first_five = document.createElement("p");
    first_five.innerText =
      "✅ Improve decision-making with custom Project Embeds";

    let second_one = document.createElement("img");
    second_one.src = "https://niftypm.com/_nuxt/img/large@1x.fade5e2.webp";

    first.append(first_one, first_two, first_three, first_four, first_five);
    second.append(second_one);
    para_tag_main_data.append(first, second);
  } else if (values === "Client Management ....") {
    let first = document.createElement("div");
    first.setAttribute("id", "first_Box");
    let second = document.createElement("div");

    let first_one = document.createElement("h1");
    first_one.innerText = "Client Management";

    let first_two = document.createElement("p");
    first_two.innerText =
      "Never lose a client due to poor communication again. Real-time collaboration to shorten feedback cycles and automate progress reporting.";

    let first_three = document.createElement("p");
    first_three.innerText = "✅ Instant messaging & one-click video meetings";

    let first_four = document.createElement("p");
    first_four.innerText =
      "✅ Centralize files & expedite approvals with Proofing";

    let first_five = document.createElement("p");
    first_five.innerText =
      "✅ Sharable project boards for real-time progress reporting";

    let second_one = document.createElement("img");
    second_one.src = "https://niftypm.com/_nuxt/img/large@1x.0c3cfc6.webp";

    first.append(first_one, first_two, first_three, first_four, first_five);
    second.append(second_one);
    para_tag_main_data.append(first, second);
  } else {
    let first = document.createElement("div");
    first.setAttribute("id", "first_Box");
    let second = document.createElement("div");

    let first_one = document.createElement("h1");
    first_one.innerText = "IT";

    let first_two = document.createElement("p");
    first_two.innerText =
      "Streamline, centralize, and modernize your workflows. One app to manage your processes without letting anything fall through the cracks again.";

    let first_three = document.createElement("p");
    first_three.innerText =
      "✅ Gather tickets using forms & prioritize resolutions";

    let first_four = document.createElement("p");
    first_four.innerText =
      "✅ Automate ticket assignments with status assignees";

    let first_five = document.createElement("p");
    first_five.innerText =
      "✅ Plan project timelines & deployments using Roadmaps";

    let second_one = document.createElement("img");
    second_one.src = "https://niftypm.com/_nuxt/img/large@1x.37d8320.webp";

    first.append(first_one, first_two, first_three, first_four, first_five);
    second.append(second_one);
    para_tag_main_data.append(first, second);
  }
};
