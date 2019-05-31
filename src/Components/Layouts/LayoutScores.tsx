/*
  Shows the current layout for
    your High Score Page.
*/

import React,{ useEffect } from 'react';

import TwitterBox from '../TwitterBox';
import TournamentText from '../TournamentText';
import LeaderBoard from '../Boards/LeaderBoard';
import SearchScore from '../SearchScore/SearchScore';
import TournLeaderBoard from '../Boards/TournLeaderBoard';
import AllScores from '../Boards/AllScores';


export interface ScoreProps {
  path: string,
  entries: any[],
  tournEntries: any[],
}


export default function LayoutScores(props: ScoreProps) {

  // SET YOUR EVENT TITLE HERE!
  const event: string = "DreamHack 2019"

  // onLoad -> set document.title to 'event'
  useEffect(() => {
    document.title = event
  }, [])

  const { entries, tournEntries } = props

  return (
    <section className="LayoutScores">
      <TwitterBox />
      <TournamentText />

            {/* TOURNAMENT LEADERBOARD */}
      {/* <TournLeaderBoard entries= { tournEntries } /> */}

      <LeaderBoard entries={ entries } />
      <SearchScore entries={ entries } event={ event }/>

            {/* ALL THE SCORES ACCUMULATED SO FAR */}
      <AllScores entries={ entries } event={ event }/>
    
    </section>
  );
}
