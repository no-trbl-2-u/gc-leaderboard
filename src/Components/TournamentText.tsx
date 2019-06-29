import React from 'react';

import { Link } from '@reach/router'

interface ITournamentText {
  event: string;
}

// TODO: Build "<ActiveTournament/>"
export default function
TournamentText (props: ITournamentText) {
  return (
    <section className="TournamentText-container">
      <div className="TournamentText">
        {/* Event Title */}
        <h1>{ props.event }</h1>

        {/* Details for Tournament Placement (Fri-Sat) */}
        <div>The top 10 Scores by 4PM Saturday will participate in our final round of two of our most difficult levels</div>
        <h3>Tournament will take place at 4:30PM</h3>

        {/* Details for Tournament Placement (Sunday) */}
        {/* <h2>Maintain the High Score by 4pm and win a free Groove Catcher T-Shirt</h2>         */}
        {/* <i><h3>*Must be back here by 4:30 to claim T-Shirt otherwise it will be given to the next highest score*</h3></i> */}

        {/* First Prize */}
        <h2>First Prize will receive Synchrony LED lights</h2>
        <div>The world's most advanced neural synch technology ($150 value)</div>
       
        {/* Second and Third Prize */}
        <h3>Second and Third Place will receive Groove Catcher T-Shirts</h3>

        {/* Final note */}
        <div>Follow your score: <span className="twitter">vizmoo.com</span></div>
        <Link to="/selection">
          <button>Click Here To Choose a different Tournament</button>
        </Link>
      </div>
    </section>
  );
}
