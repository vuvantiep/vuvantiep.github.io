function Navbar() {
  return (
    <nav id="nav">
      <ul className="links">
        <li className="active">
          <a href="index.html">Projects</a>
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
