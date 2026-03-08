import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          Nantha <em>Kumar</em>
        </div>

        <p className="footer__copy">
          © {year} — Built with <span>React + Vite</span> by Nantha Kumar
        </p>

        <nav className="footer__links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
