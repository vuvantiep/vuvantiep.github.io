function Background({ backgrounds }) {
  return (
    <div>
      <article className="post featured">
        <section>
          <h2>Background</h2>
          {backgrounds &&
            backgrounds.map((background, index) => (
              <div className="column" key={index}>
                <h4>{Object.keys(background)[0]}</h4>
                <ul>
                  {background[Object.keys(background)[0]].map((x) => (
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
