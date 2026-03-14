import { Tv } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header glass-panel">
      <div className="container header-content">
        <a href="/" className="logo">
          <Tv className="logo-icon" />
          <span className="logo-text">Free<span className="text-gradient">Lig</span></span>
        </a>
        <nav className="nav-links">
          <a href="#streams" className="nav-link">Yayınlar</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
