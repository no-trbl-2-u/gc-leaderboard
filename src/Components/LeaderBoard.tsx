import React from 'react';
import Score from './Score';

export interface LeaderBoardProps {
  entries: any[];
}

export default function 
  LeaderBoard(props: LeaderBoardProps): any {
    const { entries } = props
    return (
      <section className="LeaderBoard-container">
        <header className="LeaderBoard-header">Leader Board</header>
        {
          [...entries]
            // \ :== (a, b) -> Boolean
            .sort((a, b) => b.score - a.score)

            // \ :== (obj, Number) -> Boolean
            .filter((ea, index) => (index < 10))

            // \ :== ((String, Number), Number) -> JSX
            .map(
              ({name, score}, index: number) => (
                <Score
                  key={ index }
                  name={ name }
                  score={ score }
                  top3={(index <= 2) ? "top3" : ""}
                />
              )
            )
        }
      </section>
  )
}
