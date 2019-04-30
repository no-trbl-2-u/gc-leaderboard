import React, { useEffect } from 'react';

export interface ScoreProps {
  name: string,
  place: number,
  score: number,
  top3: string,
  available: string
}

export default function 
  Score (props: ScoreProps) {
    const { name, score, top3, place, available } = props;
    return (
      <div className={`Score ${top3}`}>
        <div>
          <span className="place">{ place }</span>
          <span className="player-score">{ score }</span>
          <span className="player">{ name }</span>
          
          {/* Use to show "'unavailable' badge" */}
          {
            available === "true" 
              ? null
              : <span className="unavailable">Unavailable</span>
          }
        </div>
      </div>
    );
}
