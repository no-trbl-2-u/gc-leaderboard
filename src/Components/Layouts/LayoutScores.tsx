/*
  Shows the current layout for
    your High Score Page.

  In the Future:
    * Toggle whether to show:
      ** <AllScores />
      ** <TournamentScores />
      ** <TournamentText />
    * TournamentText will Render a .md file
      instead of taking raw input
    * Will need a prop to define "Event Name"
*/

import React from 'react';

import TwitterBox from '../TwitterBox';
import TournamentText from '../TournamentText';
import LeaderBoard from '../Boards/LeaderBoard';
import SeachScore from '../SearchScore/SearchScore';
import TournLeaderBoard from '../Boards/TournLeaderBoard';
import AllScores from '../Boards/AllScores';


export interface ScoreProps {
  path: string,
  entries: any[],
  tournEntries: any[]
}


export default function LayoutScores(props: ScoreProps) {

  // SET YOUR EVENT TITLE HERE!
  const event = 'VRFest 2019'
  // SET THE EVENT TITLE ABOVE!

  const { entries, tournEntries } = props

  return (
    <section className="LayoutScores">
      <TwitterBox />
      <TournamentText />

            {/* TOURNAMENT LEADERBOARD */}
      {/* <TournLeaderBoard entries= { tournEntries } /> */}

      <LeaderBoard entries={ entries } />
      <SeachScore entries={ entries } event={ event }/>

            {/* ALL THE SCORES ACCUMULATED SO FAR */}
      <AllScores entries={ entries } />
    
    </section>
  );
}
