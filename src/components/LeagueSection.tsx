import { motion } from 'framer-motion';
import LeagueCard from './LeagueCard';
import './League.css';

interface LeagueData {
  id: string;
  Konfederasyon: string;
  "Ülke": string;
  "Lig Adı": string;
  Seviye: string;
  Link: string;
  Notes: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const LeagueSection = ({ leagues, onClearFilters }: { leagues: LeagueData[], onClearFilters: () => void }) => {
  if (leagues.length === 0) {
    return (
      <div className="empty-state glass-panel">
        <p>Kriterlerinizle eşleşen lig bulunamadı.</p>
        <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>Lütfen filtrelerinizi ayarlamayı deneyin.</p>
        <button onClick={onClearFilters} className="btn-watch" style={{ margin: '0 auto' }}>
          Tüm Filtreleri Temizle
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      className="league-grid"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {leagues.map(league => (
        <LeagueCard key={league.id} league={league} />
      ))}
    </motion.div>
  );
};

export default LeagueSection;
