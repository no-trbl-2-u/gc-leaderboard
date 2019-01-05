import React, { Component } from 'react';

import LogoIMG from '../Components/LogoIMG';
import TwitterBox from '../Components/TwitterBox';

import TournamentText from '../Components/TournamentText';
import LeaderBoard from '../Components/LeaderBoard';
import SeachScore from '../Components/SearchScore/SearchScore';

import entries from '../Data/entries.json';

// Purple/white
// import './App.css';

// Black/yellow
import './App2.css';

export default function App() {
  return (
    <div className="App">
      {/* <LogoIMG /> */}
      <TwitterBox />
      <TournamentText />
      <LeaderBoard entries={ entries } />
      <SeachScore entries={ entries } />
    </div>
  );
}
