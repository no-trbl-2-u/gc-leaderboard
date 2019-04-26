import React, { useEffect } from 'react';
import Score from '../Score';

export interface LeaderBoardProps {
  entries: any[];
}

export default function 
  LeaderBoard(props: LeaderBoardProps): JSX.Element {    
    const { entries } = props
    return (
      <section className="LeaderBoard-container">
        <header className="LeaderBoard-header">High Scores (for those available for tournament)</header>
        {
          scores(entries)
        }
      </section>
  )
}

// TODO -> Create an "interface for Entry[]
const scores = (entries: any[]): JSX.Element[] => [...entries]
  .sort((a, b) => Number(b.score) - Number(a.score))
  .filter((ea, index) => (index < 10))
  // .filter(ea => ea.available === String(true))
  .map(
    ({name, score}, index: number) => (
      <Score
        key={ index }
        place={ index + 1 }
        name={ name }
        score={ (Number(score)) }
        top3={(index <= 2) ? "top3" : ""}
      />
    )
  )
