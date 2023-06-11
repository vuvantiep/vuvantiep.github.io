var jsonData = "";
fetch("assets/projects/projects.json")
  .then((response) => response.json())
  .then((data) => {
    // Process the JSON data
    jsonData = data;
    const projects = jsonData;
    const projectsElement = document.getElementById("projects");
    let projectHtml = "";
    for (let i = 0; i < projects.length; i++) {
      projectHtml += generateProjectElement(projects[i], i);
    }

    projectsElement.innerHTML = projectHtml;

    for (let i = 0; i < projects.length; i++) {
      const titleElement = document.getElementById(`title_${i}`);
      titleElement.addEventListener("click", (e) =>
        handleProjectClick(e, projects[i])
      );

      const detailElement = document.getElementById(`detail_${i}`);
      detailElement.addEventListener("click", (e) =>
        handleProjectClick(e, projects[i])
      );
    }

    handleProjectClick(null, projects[0], true);
  })
  .catch((error) => {
    // Handle any errors
    console.error(error);
  });

function generateProjectElement(project, i) {
  return (
    "<article>" +
    "<header>" +
    `<span class="date"> ${project.date}</span>` +
    '<h2><a href="#" id="' +
    `title_${i}` +
    '">' +
    project.title +
    "</span></h2>" +
    "</header>" +
    '<a href="#" class="image fit"><img src="' +
    `${project.app.imagePath}pic1.png` +
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
  let result =
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
    "  </p>" ;
  result += generateSlideElement(project);
  
  result +=
    "  </ul>" +
    "</div>" +
    '<ul class="actions special">' +
    `  <li><a href="${project.app.url}"` +
    '      class="button large" target="_blank">Details</a></li>' +
    "</ul>";
  result += generateTechnologyElement(project);

  result += "  </ul>" + "</div>" + "</p>" + "</article>";

  return result;
}
function generateSlideElement(project) {
  var result = "</header>" +
    '<!-- <a href="#" class="image main"><img src="images/pic1.png" alt="" /></a> -->' +
    '<div class="slider">' +
    '  <ul class="image-list">';

  let imageLength = project.app.imageLength;
  for (let i = 0; i < imageLength; i++) {
    const app = project.app;
    result += 
      '    <li><a href="' +
      app.url +
      '"' +
      '        class="image" target="_blank">' +
      '        <img src="' +
      `${app.imagePath}pic${i+1}.png` +
      '" alt=""></li>';
  }
  return result;
}
function generateTechnologyElement(project) {
  var result = "<p>" +
    '<div class="column">' +
    "  <h3>Client</h3>" +
    "  <ul>";

  for (var i = 0; i < project.clients.length; i++) {
    const client = project.clients[i];
    result += "    <li>" + client + "</li>";
  }
  result +=
    "  </ul>" +
    "</div>";

  result +=
  '<div class="column">' +
    "  <h3>Server:</h3>" +
    "  <ul>";

  for (let i = 0; i < project.servers.length; i++) {
    const server = project.servers[i];
    result += "    <li>" + server + "</li>";
  }
  result +=
    "  </ul>" +
    "</div>" +
    '<div class="column">' +
    "  <h3>Database:</h3>" +
    "  <ul>";
  for (let i = 0; i < project.databases.length; i++) {
    const database = project.databases[i];
    result += "    <li>" + database + "</li>";
  }
  return result;
}

function handleProjectClick(e, project, isFirstLoad) {
  if (e) e.preventDefault();

  if (!isFirstLoad) {
    const intro = document.getElementById("intro");
    intro.style.display = "none";
  }

  const projectDetail = document.getElementById("projectDetail");
  projectDetail.innerHTML = generateProjectDetailElement(project);

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

function getImagesCount(filePath) {
  const fs = require("fs");
  const path = require(filePath);

  const folderPath = "path/to/folder";
  const filePattern = /\.png$/i; // Match files with ".png" extension

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    const pngFiles = files.filter((file) => filePattern.test(file));
    // console.log(`Number of .png files: ${pngFiles.length}`);
    return pngFiles.length;
  });
}
