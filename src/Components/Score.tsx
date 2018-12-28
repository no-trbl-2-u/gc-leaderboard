import React from 'react';

export interface ScoreProps {
  name: string,
  score: number
}

export default function 
  Score (props: ScoreProps) {
    const { name, score } = props;
    return (
      <div className="Score">
        <div>
          <span className="player-score">{ score }</span>
          <span className="player">{ name }</span>
        </div>
      </div>
    );
}
