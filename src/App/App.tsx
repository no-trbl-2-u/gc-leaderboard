import React, { useEffect } from 'react';

import LogoIMG from '../Components/LogoIMG';
import TwitterBox from '../Components/TwitterBox';

import TournamentText from '../Components/TournamentText';
import LeaderBoard from '../Components/Boards/LeaderBoard';
import SeachScore from '../Components/SearchScore/SearchScore';
import TournLeaderBoard from '../Components/Boards/TournLeaderBoard';
import AllScores from '../Components/Boards/AllScores';


import entries from '../Data/publicEntries.json';
import tournEntries from '../Data/tournamentEntries.json';

// Purple/white
// import './App.css';

// Black/yellow
import './App2.css';

export default function App() {

  // SET YOUR EVENT TITLE HERE!
  const event = 'VRFest 2019'
  // SET THE EVENT TITLE ABOVE!

  return (
    <div className="App">
      <TwitterBox />
      <TournamentText />

            {/* TOURNAMENT LEADERBOARD */}
      {/* <TournLeaderBoard entries= { tournEntries } /> */}

      <LeaderBoard entries={ entries } />
      <SeachScore entries={ entries } event={ event }/>

            {/* ALL THE SCORES ACCUMULATED SO FAR */}
      {/* <AllScores entries={ entries } /> */}
    </div>
  );
}
