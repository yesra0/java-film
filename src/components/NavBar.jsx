import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="header">
      <Link to="/" className="site-title">🍿 FİLM REHBERİ</Link>
      <nav className="main-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Ana Sayfa
        </NavLink>
        <NavLink to="/yazilar" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Filmler
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;