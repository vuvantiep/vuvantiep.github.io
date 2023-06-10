function Main() {
  return (
    <div>
      <Intro />
      <Header />
      <Navbar />
      <div id="main">
        <ProjectDetail />
        <Projects />
      </div>
      <Footer />
      <CopyRight />
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
