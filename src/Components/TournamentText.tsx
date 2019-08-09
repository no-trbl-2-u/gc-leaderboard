import React from 'react';

import { Link } from '@reach/router'


interface ITournamentText {
  event: string;
}

export default
function TournamentText (props: ITournamentText) {
  const styles = {
    text: {
      margin: "15px"      
    },
    event: {
      margin: "24px",
      textShadow: '2px 2px 8px gray'
    }
  }

  return (
    <section className="TournamentText-container">
      <div className="TournamentText">
        {/* Event Title */}
        <h1 style={styles.event}>{ props.event }</h1>

        {/* Details for Tournament Placement (Fri-Sat) */}
        {/* <div style={styles.text}>The top 5 Scores by 8PM Tonight will participate in our final round with our most difficult level</div> */}
        {/* <h2 style={styles.text}>Be here by 8:00PM to participate</h2> */}

        {/* Details for Tournament Placement (Sunday) */}
        <h3 style={styles.text}>Highest Score by 4PM</h3>
        <h3 style={styles.text}>will win a free Groove Catcher T-Shirt!</h3>
                

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

