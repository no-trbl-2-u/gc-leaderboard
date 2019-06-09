import React, { useEffect } from 'react';

export interface ScoreProps {
  name: string,
  place: number,
  score: number,
  top3: string,
  available: string,
  song: string
}

export default function 
  Score (props: ScoreProps) {
    const { name, score, top3, place, available, song } = props;
    return (
      <div className={`Score ${top3}`}>
        <span className="place">{ place }</span>
        <span className="player-score">{ score }</span>
        <span className="player">{ name }</span>

        {/* Song Choice */}
        {/* <span className="song">{ song }</span> */}
        
        {/* Use to show "'unavailable' badge" */}
        {/* {
          available === "true" 
            ? null
            : <span className="unavailable">Unavailable</span>
        } */}
      </div>
    );
}
