const { useEffect, useRef, useState, useCallback } = React;

function Main() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState();
  const [showIntro, setShowIntro] = useState(true);
  const [currentTab, setCurrentTab] = useState(1);
  const [backgrounds, setBackgrounds] = useState([]);
  const [educations, setEducations] = useState([]);
  const [showNavPannel, setShowNavPannel] = useState(false);
  const [intervalCustom, setIntervalCustom] = useState(0);

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

  useEffect(() => {
    fetch("assets/backgrounds/backgrounds.json")
      .then((response) => response.json())
      .then((data) => {
        setBackgrounds(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch("assets/educations/educations.json")
      .then((response) => response.json())
      .then((data) => {
        setEducations(data);
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
    if (intervalCustom) clearInterval(intervalCustom);

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

    setIntervalCustom(setInterval(slideNext, 3000)); // Auto slide every 3 seconds
  }

  function hanldeTabChange(tab) {
    setCurrentTab(tab);
  }

  return (
    <div id="layout" className={showNavPannel ? "is-navPanel-visible" : ""}>
      <a href="#" id="navPanelToggle" onClick={() => setShowNavPannel(true)}>
        Menu
      </a>
      <Intro />
      <Header />
      <Navbar currentTab={currentTab} onTabChange={hanldeTabChange} />
      {showNavPannel && (
        <NavPanel
          onClose={() => setShowNavPannel(false)}
          onTabChange={hanldeTabChange}
        />
      )}
      <div id="main">
        {currentTab === 1 && selectedProject && (
          <ProjectDetail project={selectedProject} />
        )}
        {currentTab === 1 && (
          <Projects projects={projects} onClick={handleProjectClick} />
        )}

        {currentTab === 2 && <Background backgrounds={backgrounds} />}

        {currentTab === 3 && <Education educations={educations} />}
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));