import { Play, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
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

const getFlagCode = (country: string): string => {
  const map: Record<string, string> = {
    'Almanya': 'de', 'Andorra': 'ad', 'Arnavutluk': 'al', 'Azerbaycan': 'az',
    'Belarus': 'by', 'Cebelitarık': 'gi', 'Ermenistan': 'am', 'Estonya': 'ee',
    'Fransa': 'fr', 'Galler': 'gb-wls', 'Gürcistan': 'ge', 'Hırvatistan': 'hr',
    'İsrail': 'il', 'İsviçre': 'ch', 'İtalya': 'it', 'Kazakistan': 'kz',
    'Kuzey Makedonya': 'mk', 'Litvanya': 'lt', 'Macaristan': 'hu', 'Polonya': 'pl',
    'Sırbistan': 'rs', 'Slovenya': 'si', 'Türkiye': 'tr', 'Venezuela': 've',
    'Avustralya': 'au', 'Bahreyn': 'bh', 'BAE': 'ae', 'Endonezya': 'id',
    'Filipinler': 'ph', 'Güney Kore': 'kr', 'Irak': 'iq', 'İran': 'ir',
    'Japonya': 'jp', 'Kırgızistan': 'kg', 'Myanmar': 'mm', 'Özbekistan': 'uz',
    'Tayland': 'th', 'Benin': 'bj', 'Burkina Faso': 'bf', 'Burundi': 'bi',
    'Cezayir': 'dz', 'Etiyopya': 'et', 'Fas': 'ma', 'Fildişi Sahili': 'ci',
    'Gabon': 'ga', 'Gambiya': 'gm', 'Gana': 'gh', 'Demokratik Kongo': 'cd',
    'Liberya': 'lr', 'Mali': 'ml', 'Mısır': 'eg', 'Moritanya': 'mr',
    'Nijerya': 'ng', 'Sierra Leone': 'sl', 'Togo': 'tg', 'ABD': 'us',
  };
  return map[country] || 'tr';
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "tween" as const, ease: "easeOut", duration: 0.3 } }
};

const LeagueCard = ({ league }: { league: LeagueData }) => {
  const isYouTube = league.Link.includes('youtube.com');
  const isFIFA = league.Link.includes('fifa.com');
  const platformName = isYouTube ? 'YouTube' : isFIFA ? 'FIFA+' : 'Official Stream';
  const flagCode = getFlagCode(league["Ülke"]);

  return (
    <motion.div variants={itemVariants} className="league-card glass-panel group">
      <div className="lc-header">
        <div className="lc-flag">
          <img
            src={`https://flagcdn.com/w80/${flagCode}.png`}
            srcSet={`https://flagcdn.com/w160/${flagCode}.png 2x`}
            width="48"
            height="36"
            alt={league["Ülke"]}
            style={{ borderRadius: '4px', objectFit: 'cover' }}
          />
        </div>
        <div className="lc-tags">
          <span className="lc-tag confed-tag">{league.Konfederasyon}</span>
          <span className="lc-tag tier-tag">Seviye: {league.Seviye}</span>
        </div>
      </div>
      
      <div className="lc-body">
        <h3 className="lc-title">{league["Lig Adı"]}</h3>
        <p className="lc-country">{league["Ülke"]}</p>
        <p className="lc-notes">{league.Notes || "Doğrudan resmi yayın erişimi"}</p>
      </div>

      <div className="lc-footer">
        <div className="lc-platform">
          <ShieldCheck size={16} className="text-secondary" />
          <span>{platformName}</span>
        </div>
        <a href={league.Link} target="_blank" rel="noopener noreferrer" className="btn-watch">
          <Play size={16} fill="currentColor" />
          <span>İzle</span>
        </a>
      </div>
    </motion.div>
  );
};

export default LeagueCard;
