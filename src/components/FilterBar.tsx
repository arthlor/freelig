import { Search, Filter } from 'lucide-react';
import './League.css';

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (t: string) => void;
  selectedConfederation: string;
  setSelectedConfederation: (c: string) => void;
}

const FilterBar = ({ searchTerm, setSearchTerm, selectedConfederation, setSelectedConfederation }: FilterBarProps) => {
  const confeds = ['All', 'UEFA', 'CONMEBOL', 'AFC', 'CAF', 'CONCACAF'];

  return (
    <div className="filter-bar glass-panel">
      <div className="search-group">
        <Search className="search-icon" size={20} />
        <input 
          type="text" 
          className="search-input" 
          placeholder="Ligleri veya ülkeleri ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="filter-group">
        <Filter className="filter-icon" size={20} />
        <div className="confed-badges">
          {confeds.map(c => (
            <button 
              key={c}
              className={`confed-badge ${selectedConfederation === c ? 'active' : ''}`}
              onClick={() => setSelectedConfederation(c)}
            >
              {c === 'All' ? 'Tümü' : c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
