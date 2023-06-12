function Navbar({ currentTab, onTabChange }) {
  function handleTabClick(e, tab) {
    e.preventDefault();
    onTabChange(tab);
  }

  return (
    <nav id="nav">
      <ul className="links">
        <li className={currentTab === 1 ? "active" : ""}>
          <a href="#" onClick={(e) => handleTabClick(e, 1)}>
            Projects
          </a>
        </li>
        <li className={currentTab === 2 ? "active" : ""}>
          <a href="#" onClick={(e) => handleTabClick(e, 2)}>
            Background
          </a>
        </li>
        <li className={currentTab === 3 ? "active" : ""}>
          <a href="#" onClick={(e) => handleTabClick(e, 3)}>
            Education
          </a>
        </li>
      </ul>
      <SolicalLinks />
    </nav>
  );
}
