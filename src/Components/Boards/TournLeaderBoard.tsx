import React from 'react';
import Score from '../Score';

export interface LeaderBoardProps {
  entries: any[];
  event: string;
}

export default function 
  LeaderBoard(props: LeaderBoardProps): JSX.Element {
    const { entries, event } = props
    return (
      <section className="LeaderBoard-container">
        <header className="LeaderBoard-header">{ event } Tournament Winner!!! </header>
        {
          scores(entries)
        }
      </section>
  )
}

const scores = (entries: any[]): JSX.Element[] => [...entries]

// \ :== (a, b) -> Boolean
  .sort((a, b) => Number(b.score) - Number(a.score))

// \ :== Ord a => [Entries] -> (a -> Bool) -> [Entries]
  .filter(ea => ea.score > 0)

  // \ :== ((String, Number), Number) -> JSX.Element
  .map(
    ({name, score, available, song}, index: number) => (
      <Score
        key={ index }
        place={ index + 1 }
        name={ name }
        score={ (Number(score)) }
        // Bad Workaround for Winner
        top3={(name === 'Niki') ? "top" : ""}
        // Bad Workaround for available
        available={ "true" }
        song={ song }
      />
    )
  )
