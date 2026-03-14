import { Heart } from 'lucide-react';
import './Header.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel" style={{ marginTop: '5rem', padding: '2rem 0', borderBottom: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: 0 }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
          Futbol severler için <Heart size={16} fill="var(--accent-lime)" color="var(--accent-lime)" /> ile yapıldı.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', alignItems: 'center' }}>
          <span>Geliştirici: <a href="https://anilkaraca.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-lime)', textDecoration: 'none' }}>anilkaraca.com</a></span>
          <span>Veri Kaynağı: <a href="https://x.com/ekscouting0" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-lime)', textDecoration: 'none' }}>EK - Scouting (@ekscouting0)</a></span>
        </p>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', textAlign: 'center', marginTop: '0.5rem' }}>
          Tüm bağlantılar doğrudan resmi yayıncıların hesaplarına yönlendirilmektedir.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
