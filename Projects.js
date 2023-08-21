function Projects({ projects, onClick }) {
  return (
    <section className="posts">
      {projects &&
        projects.map((p, index) => (
          <article key={index}>
            <header>
              <span className="date">{p.projectDate}</span>
              <h2>
                <a href="#" onClick={(e) => onClick(e, p)}>
                  {p.title}
                </a>
              </h2>
            </header>
            <a href="#" className="image fit">
              <img
                src={`${p.app.imagePath}pic1.png`}
                alt=""
                onClick={(e) => onClick(e, p)}
              />
            </a>
            <p>{p.description}</p>
            <ul className="actions special">
              <li>
                <a href="#" className="button" onClick={(e) => onClick(e, p)}>
                  Details
                </a>
              </li>
            </ul>
          </article>
        ))}
    </section>
  );
}
