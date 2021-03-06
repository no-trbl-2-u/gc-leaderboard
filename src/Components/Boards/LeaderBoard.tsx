import React, { useEffect } from 'react';
import Score from '../Score';

export interface LeaderBoardProps {
  entries: any[];
}

// TODO -> Create an "interface for Entry[]
const scores = (entries: any[]): JSX.Element[] => [...entries]
  // Sort Scores
  .sort((a, b) => Number(b.score) - Number(a.score))

  // Filter out Unavailable
  // .filter(ea => ea.available === "true")

  // Quantity of Scores
  .filter((ea, index) => index < 10 && ea.score > 0)
  
  // Create Components
  .map(
    ({name, score, available, song}, index: number) => (
      <Score
        key={ index }
        place={ index + 1 }
        name={ name }
        score={ (Number(score)) }

        top3={(index === 1 ) ? "top3" : ""}
        // top3={(index === 0 && available === "true") ? "top3" : ""}
        available={ available }
        song={ song }
      />
    )
  )

export default function 
LeaderBoard(props: LeaderBoardProps): JSX.Element {
  const { entries } = props
  return (
    <section className="LeaderBoard-container">
      <header className="LeaderBoard-header">High Scores</header>
      {
        scores(entries)
      }
    </section>
  )
}