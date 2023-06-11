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
        <ul className="actions special">
          <li>
            <a href={project.app.url} className="button large" target="_blank">
              Details
            </a>
          </li>
        </ul>

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
        </div> */}
      </article>
    </div>
  );
}
