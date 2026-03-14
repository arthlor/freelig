import { useState } from 'react';
import './App.css';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Footer from './components/Footer.tsx';
import FilterBar from './components/FilterBar.tsx';
import LeagueSection from './components/LeagueSection.tsx';
import leaguesData from './data/leagues.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedConfederation, setSelectedConfederation] = useState('All');

  // Filter data
  const filteredLeagues = leaguesData.filter(league => {
    const matchesSearch = league['Lig Adı'].toLowerCase().includes(searchTerm.toLowerCase()) || 
                          league['Ülke'].toLowerCase().includes(searchTerm.toLowerCase());
    const matchesConfed = selectedConfederation === 'All' || league['Konfederasyon'] === selectedConfederation;
    return matchesSearch && matchesConfed;
  });

  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <section className="container mt-12" id="streams">
          <FilterBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            selectedConfederation={selectedConfederation} 
            setSelectedConfederation={setSelectedConfederation} 
          />
          <LeagueSection 
            leagues={filteredLeagues} 
            onClearFilters={() => {
              setSearchTerm('');
              setSelectedConfederation('All');
            }}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
