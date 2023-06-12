function Education({ educations }) {
  return (
    <div>
      <article className="post featured">
        <section>
          <h2>Education</h2>
          {educations &&
            educations.map((education, index) => (
              <div className="column" key={index}>
                <h4>{Object.keys(education)[0]}</h4>
                <ul>
                  {education[Object.keys(education)[0]].map((x) => (
                    <li key={x}>
                      <span className="bullet">&#8226;</span> {x}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </section>
      </article>
    </div>
  );
}
