import React from 'react';
import Score from './Score';

export interface LeaderBoardProps {
  entries: any[];
}

export default function 
  LeaderBoard(props: LeaderBoardProps): JSX.Element {
    const { entries } = props
    return (
      <section className="LeaderBoard-container">
        <header className="LeaderBoard-header">Current Qualifiers</header>
        {
          scores(entries)
        }
      </section>
  )
}

// TODO -> Create an "interface for Entry[]
const scores = (entries: any[]): JSX.Element[] => [...entries]
  // \ :== (a, b) -> Boolean
  .sort((a, b) => Number(b.score) - Number(a.score))

  // \ :== (obj, Number) -> Boolean
  .filter((ea, index) => (index <= 10))

  // \ :== obj -> Boolean
  .filter(ea => ea.available === String(true))

  // \ :== ((String, Number), Number) -> JSX
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
