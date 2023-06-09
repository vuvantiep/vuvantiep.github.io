const projects = [
  {
    title: "Sed magna ipsum faucibus",
    description:
      "Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.",
    date: "2020 - 2023",
    detail:
      "Havana Chronicle is an immersive gacha game set in the vibrant world of Havana. As a player, you" +
      "will embark on an adventure, exploring the Havana planet and training a team of unique" +
      "characters." +
      "Collect items and resources to upgrade your team members and unlock their abilities. Manage your" +
      "resources strategically to overcome challenges in PvE modes, ranging from easy to hard and" +
      "nightmare" +
      "difficulties. Engage in PvP battles in the arena to test your team's strength against other" +
      "players." +
      "Join or create guilds for multiplayer interactions, collaborate with others, and compete in PvP" +
      "battles. Complete quests, manage your inventory, and utilize a skill system to enhance your" +
      "team's" +
      "capabilities. With its captivating 3D graphics, Havana Chronicle provides an immersive and" +
      "visually" +
      "appealing gaming experience.",
    apps: [
      {
        url: "https://play.google.com/store/apps/details?id=com.peoplug.havana&hl=en_US&pli=1",
        image: "images/project1/pic01.png",
      },
    ],
    clients: ["C#"],
    servers: ["C#"],
    databases: ["MySQL"],
  },
];

const projectsElement = document.getElementById("projects");
let projectHtml = "";
for (let i = 0; i < projects.length; i++) {
  projectHtml += generateProjectElement(projects[i], i);
}

function generateProjectElement(project, i) {
  return (
    "<article>" +
    "<header>" +
    '<span class="date">April 24, 2017</span>' +
    '<h2><span id="' +
    `title_${i}` +
    '">' +
    project.title +
    "</span></h2>" +
    "</header>" +
    '<a href="#" class="image fit"><img src="images/pic02.jpg" alt="" /></a>' +
    "<p>" +
    project.description +
    "</p>" +
    '<ul class="actions special">' +
    '<li><a href="#" class="button">Full Story</a></li>' +
    "</ul>" +
    "</article>"
  );
}

function generateProjectDetailElement(project) {
  let html =
    '<article class="post featured">' +
    '<header class="major">' +
    '  <span class="date">' +
    project.date +
    "</span>" +
    '  <h2><a href="#">' +
    project.title +
    "    </a></h2>" +
    "  <p>" +
    project.detail +
    "  </p>" +
    "</header>" +
    '<!-- <a href="#" class="image main"><img src="images/pic01.png" alt="" /></a> -->' +
    '<div class="slider">' +
    '  <ul class="image-list">';
  for (let i = 0; i < project.apps.length; i++) {
    const app = project.apps[i];
    html +=
      '    <li><a href="' +
      app.url +
      '"' +
      '        class="image" target="_blank">' +
      '        <img src="' +
      app.image +
      '" alt=""></li>';
  }

  html +=
    "  </ul>" +
    "</div>" +
    '<ul class="actions special">' +
    '  <li><a href="https://play.google.com/store/apps/details?id=com.peoplug.havana&hl=en_US&pli=1"' +
    '      class="button large" target="_blank">Details</a></li>' +
    "</ul>" +
    "<p>" +
    '<div class="column">' +
    "  <h3>Client:</h3>" +
    "  <ul>";

  for (let i = 0; i < project.clients.length; i++) {
    const client = project.clients[i];
    html += "    <li>" + client + "</li>";
  }
  html +=
    "  </ul>" +
    "</div>" +
    '<div class="column">' +
    "  <h3>Server:</h3>" +
    "  <ul>";

  for (let i = 0; i < project.servers.length; i++) {
    const server = project.servers[i];
    html += "    <li>" + server + "</li>";
  }
  html +=
    "  </ul>" +
    "</div>" +
    '<div class="column">' +
    "  <h3>Database:</h3>" +
    "  <ul>";
  for (let i = 0; i < project.databases.length; i++) {
    const database = project.databases[i];
    html += "    <li>" + database + "</li>";
  }

  html += "  </ul>" + "</div>" + "</p>" + "</article>";

  return html;
}

projectsElement.innerHTML = projectHtml;

for (let i = 0; i < projects.length; i++) {
  const nextBtn = document.getElementById(`title_${i}`);
  nextBtn.addEventListener("click", () => {
    const intro = document.getElementById("intro");
    intro.style.display = "none";

    const projectDetail = document.getElementById("projectDetail");
    projectDetail.innerHTML = generateProjectDetailElement(projects[i]);

    window.scrollTo(0, 0);
  });
}
