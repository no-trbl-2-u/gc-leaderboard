import React from 'react';

import { Link } from '@reach/router'

interface ITournamentText {
  event: string;
}

// TODO: Build "<ActiveTournament/>"
export default function TournamentText (props: ITournamentText) {
  return (
    <section className="TournamentText-container">
      <div className="TournamentText">
        {/* Event Title */}
        <h1>{ props.event }</h1>

        {/* Details for Tournament Placement */}
        <h2>Maintain the High Score by 5pm and win a free Groove Catcher T-Shirt</h2>
        <i>
        <h3>*Must be back here by 5:30 to claim T-Shirt otherwise it will be given to the next highest score*</h3>
        </i>
        {/* First Prize */}
        {/* <h2>First Prize will receive Synchrony LED lights</h2>
        <div>The world's most advanced neural synch technology ($150 value)</div>
        */}
        {/* Second and Third Prize */}
        {/* <h3>Second and Third Place will receive Groove Catcher T-Shirts</h3> */}

        {/* Final note */}
        <div>Follow your score: <span className="twitter">vizmoo.com</span></div>
        <Link to="/selection">
          <button>Click HEre</button>
        </Link>
      </div>
    </section>
  );
}
