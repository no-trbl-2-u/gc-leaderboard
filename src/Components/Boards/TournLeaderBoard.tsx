import React from 'react';
import Score from '../Score';

export interface LeaderBoardProps {
  entries: any[];
}

export default function 
  LeaderBoard(props: LeaderBoardProps): JSX.Element {
    const { entries } = props
    return (
      <section className="LeaderBoard-container">
        <header className="LeaderBoard-header">Tournament Winner!!!</header>
        {
          scores(entries)
        }
      </section>
  )
}

const scores = (entries: any[]): JSX.Element[] => [...entries]

// \ :== (a, b) -> Boolean
  .sort((a, b) => Number(b.score) - Number(a.score))

  // \ :== ((String, Number), Number) -> JSX.Element
  .map(
    ({name, score}, index: number) => (
      <Score
        key={ index }
        place={ index + 1 }
        name={ name }
        score={ (Number(score)) }
        top3={(name === 'HellAshes') ? "top" : ""}
      />
    )
  )