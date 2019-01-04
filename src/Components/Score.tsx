import React from 'react';

export interface ScoreProps {
  name: string,
  place: number,
  score: number,
  top3: string
}

export default function 
  Score (props: ScoreProps) {
    const { name, score, top3, place } = props;
    return (
      <div className={`Score ${top3}`}>
        <div>
          <span className="place">{ place }</span>
          <span className="player-score">{ score }</span>
          <span className="player">{ name }</span>
        </div>
      </div>
    );
}
