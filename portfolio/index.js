var jsonData = "";
fetch('assets/projects/projects.json')
.then(response => response.json())
.then(data => {
  // Process the JSON data
  jsonData = data;
  console.log(data);
})
.catch(error => {
  // Handle any errors
  console.error(error);
});
const projects = jsonData;
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
    '<h2><a href="#" id="' +
    `title_${i}` +
    '">' +
    project.title +
    "</span></h2>" +
    "</header>" +
    '<a href="#" class="image fit"><img src="' +
    `${project.app.imagePath}pic01.png` +
    '" alt="" /></a>' +
    "<p>" +
    project.description +
    "</p>" +
    '<ul class="actions special">' +
    '<li><a href="#" class="button" id="' +
    `detail_${i}` +
    '">Full Story</a></li>' +
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
  for (let i = 0; i < project.app.imageLength; i++) {
    const app = project.app;
    html +=
      '    <li><a href="' +
      app.url +
      '"' +
      '        class="image" target="_blank">' +
      '        <img src="' +
      `${app.imagePath}pic${i < 10 ? "0" + (i + 1) : i + 1}.png` +
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

function handleProjectClick(e, i) {
  e.preventDefault();
  const intro = document.getElementById("intro");
  intro.style.display = "none";

  const projectDetail = document.getElementById("projectDetail");
  projectDetail.innerHTML = generateProjectDetailElement(projects[i]);

  window.scrollTo(0, 0);

  var slider = document.querySelector(".slider");
  var imageList = document.querySelector(".image-list");
  var images = document.querySelectorAll(".image-list li");

  var currentIndex = 0;
  var slideWidth = slider.clientWidth;

  function slideTo(index) {
    var offset = index * -slideWidth;
    imageList.style.transform = "translateX(" + offset + "px)";
    currentIndex = index;
  }

  function slideNext() {
    var nextIndex = (currentIndex + 1) % images.length;
    slideTo(nextIndex);
  }

  function slidePrevious() {
    var previousIndex = currentIndex - 1;
    if (previousIndex < 0) {
      previousIndex = images.length - 1;
    }
    slideTo(previousIndex);
  }

  setInterval(slideNext, 3000); // Auto slide every 3 seconds
}

for (let i = 0; i < projects.length; i++) {
  const titleElement = document.getElementById(`title_${i}`);
  titleElement.addEventListener("click", (e) => handleProjectClick(e, i));

  const detailElement = document.getElementById(`detail_${i}`);
  detailElement.addEventListener("click", (e) => handleProjectClick(e, i));
}
