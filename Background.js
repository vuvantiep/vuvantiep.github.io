function Background({ backgrounds }) {
  return (
    <div>
      <article className="post featured">
        <section>
          <h2>Background</h2>
          {backgrounds &&
            backgrounds.map((background, index) => (
              // <div className="column" key={index}>
              <div key={index}>
                {/* <h4>{Object.keys(background)[0]}</h4> */}
                <ul>
                  {background[Object.keys(background)[0]].map((x) => (
                    <p key={x}>
                      {x}
                    </p>
                  ))}
                </ul>
              </div>
            ))}
        </section>
      </article>
    </div>
  );
}
