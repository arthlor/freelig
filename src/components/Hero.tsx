import './Header.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-badge glass-panel">
          <span className="pulse-dot"></span>
          %100 Ücretsiz Canlı Futbol Yayınları
        </div>
        <h1 className="hero-title">
          <span className="text-gradient">Ücretsiz Futbol Ligleri</span>
        </h1>
        <p className="hero-subtitle">
          Dünyanın dört bir yanından resmi ve izlemesi ücretsiz futbol ligleri için nihai rehberiniz. Şu anda YouTube ve FIFA+'da yayınlanan maçları keşfedin.
        </p>
        <div className="hero-actions">
          <a href="#streams" className="btn-primary">Yayınları Keşfet</a>
        </div>
      </div>
      <div className="hero-bg-glow"></div>
    </section>
  );
};

export default Hero;
