import React, { useEffect } from 'react';
import { Router } from '@reach/router';

// Data
import entries from '../Data/publicEntries.json';
import tournEntries from '../Data/tournamentEntries.json';

// Components
import NavBar from '../Components/NavBar';

// Layouts
import LayoutScores from '../Components/Layouts/LayoutScores';
import LayoutHome from '../Components/Layouts/LayoutHome';
import LayoutSelection from '../Components/Layouts/LayoutSelection';

import './App.css';

export default function App() {

  return (
    <div className="App">
      {/* <NavBar /> */}
      <Router>
        {/* Temporary Routes until pages are done  */}
        <LayoutSelection path="/selection" />
        <LayoutScores
          path="/"
          entries={ entries } 
          tournEntries={ tournEntries } 
        />
      </Router>
    </div>
  );
}
