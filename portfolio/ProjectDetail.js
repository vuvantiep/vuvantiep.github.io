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
          <iframe
            width="80%"
            height="400"
            src="https://www.youtube.com/embed/pWQ1GJODblo"
          ></iframe>
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
        <section className="section-center">
          <ul className="icons alt">
          <li>
              Details
            </li>
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
            <li>
              <a
                href={project.trailer}
                className="icon brands alt fa-youtube"
              >
                <span className="label">Youtube</span>
              </a>
            </li>
          </ul>
        </section>
        {/* <ul className="actions special">
          <li>
            <a href={project.app.url} className="button large" target="_blank">
              Details
            </a>
          </li>
        </ul> */}
        {/* <div className="column"> */}
            <h2>Features</h2>
            <ul>
              {project.features &&
                project.features.map((c, index) => <li key={index}>
                <span className="bullet">&#8226;</span> {c}
              </li>)}
            </ul>
          {/* </div> */}
        <div>
          <div className="column">
            <h3>Client</h3>
            <ul>
              {project.clients &&
                project.clients.map((c, index) => <li key={index}>{c}</li>)}
            </ul>
          </div>

          <div className="column">
            <h3>Server</h3>
            <ul>
              {project.servers &&
                project.servers.map((c, index) => <li key={index}>{c}</li>)}
            </ul>
          </div>

          <div className="column">
            <h3>Database</h3>
            <ul>
              {project.databases &&
                project.databases.map((c, index) => <li key={index}>{c}</li>)}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}