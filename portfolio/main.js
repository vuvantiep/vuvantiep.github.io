const { useEffect, useRef, useState, useCallback } = React;

function Main() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    fetch("assets/projects/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setSelectedProject(data[0]);
        executeSlider();
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function handleProjectClick(e, project) {
    e.preventDefault();
    setShowIntro(false);

    setSelectedProject(project);

    window.scrollTo(0, 0);

    executeSlider();
  }

  function executeSlider() {
    var slider = document.querySelector(".slider");
    var imageList = document.querySelector(".image-list");
    var images = document.querySelectorAll(".image-list li");

    if (!slider) return;

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

  return (
    <div>
      {showIntro && <Intro />}
      <Header />
      <Navbar />
      <div id="main">
        {selectedProject && <ProjectDetail project={selectedProject} />}
        <Projects projects={projects} onClick={handleProjectClick} />
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
