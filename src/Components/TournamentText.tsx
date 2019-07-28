import React from 'react';

import { Link } from '@reach/router'


interface ITournamentText {
  event: string;
}

export default
function TournamentText (props: ITournamentText) {
  const style = {
    margin: "15px"
  }

  return (
    <section className="TournamentText-container">
      <div className="TournamentText">
        {/* Event Title */}
        <h1 style={style}>{ props.event }</h1>

        {/* Details for Tournament Placement (Fri-Sat) */}
        <div style={style}>The top 5 Scores by 8PM Tonight will participate in our final round with our most difficult level</div>
        <h2 style={style}>Be here by 8:00PM to participate</h2>

        {/* Details for Tournament Placement (Sunday) */}
        <h3 style={style}>Highest Score by the end of the event will win a free Groove Catcher T-Shirt!</h3>        

        {/* First Prize */}
        {/* <h2>First Prize will receive Synchrony LED lights</h2> */}
        {/* <h2>First Prize will be a $50 Amazon Gift Card</h2> */}
        {/* <div>The world's most advanced neural synch technology ($150 value)</div> */}
       
        {/* Second and Third Prize */}
        {/* <h3>Second and Third Place will receive Groove Catcher T-Shirts</h3> */}

        {/* Final note */}
        <div>Follow your score: <span className="twitter">vizmoo.com</span></div>
        {/* <Link to="/selection">
          <button>Click Here To Choose a different Tournament</button>
        </Link> */}
      </div>
    </section>
  );
}

