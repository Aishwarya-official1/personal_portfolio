import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import './Navbar.css';

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 480) {
        setMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const linkClass = ({ isActive }) => (isActive ? 'active-link' : undefined);

  return (
    <header>
      <nav>
        <div className="left">
          <NavLink to="/home" className="logo">
            Aishwarya
          </NavLink>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className={`center ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/home" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        <div className="right">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light or dark theme"
          >
            <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
            <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>

          <a href="https://github.com/Aishwarya-official1" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
            <span>Github</span>
          </a>

          <a
            href="https://www.linkedin.com/in/devireddy-aishwarya-devireddy-/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>

          <a href="mailto:da24csb0b18@student.nitw.ac.in">
            <i className="fa-solid fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
