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
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/vu-tiep-b00525197/"
            className="icon brands alt fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/qr/IY4YSZ45QFKKJ1"
            className="icon brands alt fa-whatsapp"
          >
            <span className="label">whatsapp</span>
          </a>
        </li>
        <li>
          <a href="https://t.me/tiepvv" className="icon brands alt fa-telegram">
            <span className="label">Telegram</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
