import React, { useEffect } from 'react';
import { Router } from '@reach/router';

// Data
import entries from '../Data/publicEntries.json';
import tournEntries from '../Data/tournamentEntries.json';

// Layouts
import LayoutScores from '../Components/Layouts/LayoutScores';
import LayoutHome from '../Components/Layouts/LayoutHome';
import LayoutSelection from '../Components/Layouts/LayoutSelection';


import './App2.css';

export default function App() {
  return (
    <div className="App">
      <Router>

        <LayoutHome path="/" />

        <LayoutSelection path="/selection" />

        <LayoutScores
          path="/scores"
          entries={ entries } 
          tournEntries={ tournEntries } 
        />
      </Router>
    </div>
  );
}
