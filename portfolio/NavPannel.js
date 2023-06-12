function NavPanel({ onClose, onTabChange }) {
  function handleTabClick(e, tab) {
    e.preventDefault();
    onClose();
    onTabChange(tab);
  }

  return (
    <div id="navPanel" className="is-navPanel-visible">
      <nav>
        <ul className="links">
          <li>
            <a href="#" onClick={(e) => handleTabClick(e, 1)}>
              Projects
            </a>
          </li>
          <li className="active">
            <a href="#" onClick={(e) => handleTabClick(e, 2)}>
              Background
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleTabClick(e, 3)}>
              Education
            </a>
          </li>
        </ul>
        <SolicalLinks />
      </nav>
      <a
        href="#"
        className="close"
        onClick={onClose}
        style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
      ></a>
    </div>
  );
}
