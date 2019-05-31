import React from 'react';

interface ITournamentText {
  event: string;
}

export default function TournamentText (props: ITournamentText) {
  return (
    <section className="TournamentText-container">
      <div className="TournamentText">
        {/* Event Title */}
        <h1>{ props.event }</h1>
        
        {/* Details for Tournament Placement */}
        <h2>Top 10 Scores will participate in a showdown of two of our most difficult songs on Saturday 5PM</h2>
        <div>Must maintain top 5 by Saturday at 4pm</div>
        
        {/* First Prize */}
        <h2>First Prize will receive Synchrony LED lights</h2>
        <div>The world's most advanced neural synch technology ($150 value)</div>
        
        {/* Second and Third Prize */}
        <h3>Second and Third Place will receive Groove Catcher T-Shirts</h3>
        
        {/* Final note */}
        <div>Follow your score: <span className="twitter">vizmoo.com</span></div>
      </div>
    </section>
  );
}
