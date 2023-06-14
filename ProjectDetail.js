function ProjectDetail({ project }) {
  const imageNumbers = [];
  for (let i = 1; i <= project.app.imageLength; i++) imageNumbers.push(`${i}`);

  return (
    <div id="projectDetail">
      <article className="post featured">
        <header className="major">
          <span className="date">{project.date}</span>
          <h2>
            <a href="#">{project.title}</a>
          </h2>
          <p>{project.detail}</p>
        </header>
        <div className="slider">
          <ul className="image-list">
            {imageNumbers &&
              imageNumbers.map((id) => (
                <li key={id}>
                  <a href={project.app.url} className="image" target="_blank" />
                  <img src={`${project.app.imagePath}pic${id}.png`} alt="" />
                </li>
              ))}
          </ul>
        </div>
        <div>
          <section className="section-center">
            <iframe width="80%" height="400" src={project.trailer}></iframe>
          </section>
        </div>
        <br></br>
        <div id="store">
          <section>
            <ul className="icons alt">
              {/* <li>
              Details
            </li> */}
              <li>
                <a
                  href={project.app.url}
                  className="icon brands alt fa-android"
                >
                  <span className="label">Android</span>
                </a>
              </li>
              {/* <li>
              <a
                href={project.app.url_iOS}
                className="icon brands alt fa-apple"
              >
                <span className="label">iOS</span>
              </a>
            </li> */}
              {/* <li>
              <a
                href={project.trailer}
                className="icon brands alt fa-youtube"
              >
                <span className="label">Youtube</span>
              </a>
            </li> */}
            </ul>
          </section>
        </div>
        <div id="feature">
          <section>
            <h2>Features</h2>
            <ul>
              {project.features &&
                project.features.map((c, index) => (
                  <li key={index}>
                    <span className="bullet">&#8226;</span> {c}
                  </li>
                ))}
            </ul>
          </section>
        </div>
        <div id="technology">
          <section>
            <h2>Technologies</h2>
            <div className="technology-list">
              {project.technologies &&
                project.technologies.map((technology, index) => (
                  <div
                    className={
                      Object.keys(technology)[0] === "game client"
                        ? "column long-list"
                        : "column"
                    }
                    key={index}
                  >
                    <h4>{Object.keys(technology)[0]}</h4>
                    <ul>
                      {technology[Object.keys(technology)[0]].map((x) => (
                        <li key={x}>
                          <span className="bullet">&#8226;</span> {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </section>
          <section>
            <h2>role</h2>
            <p>{project.role}</p>
          </section>
        </div>
      </article>
    </div>
  );
}
