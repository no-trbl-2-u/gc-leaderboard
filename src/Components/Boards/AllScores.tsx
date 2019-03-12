import React from 'react';
import Score from '../Score';

export interface AllScoresProps {
  entries: any[];
  event: string;
}

export default function 
  AllScores(props: AllScoresProps): JSX.Element {
    const { entries, event } = props
    return (
      <section className="LeaderBoard-container">
        <header className="LeaderBoard-header">{ event }</header>
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

  // \ :== (obj) -> Boolean
  .filter(ea => ea.score > 40000)

  // \ :== ((String, Number), Number) -> JSX
  .map(
    ({name, score}, index: number) => (
      <Score
        key={ index }
        place={ index + 1 }
        name={ name }
        score={ (Number(score)) }
        top3={""}
      />
    )
  )
