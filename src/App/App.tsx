import React, { Component } from 'react';

import LogoIMG from '../Components/LogoIMG';
import TournamentText from '../Components/TournamentText';
import LeaderBoard from '../Components/LeaderBoard';
import SeachScore from '../Components/SearchScore/SearchScore';

import entries from '../Data/entires.json';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <LogoIMG />
      <TournamentText />
      <LeaderBoard entries={ entries } />
      <SeachScore entries={ entries } />
    </div>
  );
}

/*
  <LogoIMG />     // w/ competition
  <Scoreboard />  // w/ (<Top3 /> ++ <Rest />)
  <SearchScore /> // w/ <ScoreDisplay />
*/
