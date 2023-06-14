function Education({ educations: fields }) {
  return (
    <div>
      <article className="post featured">
        <section>
          <h2>Education</h2>
          {fields &&
            fields.map((field, index) => (
              <div className="row" key={index}>
                <div>
                  <h3>{Object.keys(field)[0]}</h3>
                  <ul>
                    {field[Object.keys(field)[0]].map((education) => (
                      <li key={education}>
                        {Object.keys(education)[0]}
                        <br></br>
                        <span className="bullet">&#8226;</span> at {Object.values(education)[0]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </section>
      </article>
    </div>
  );
}
