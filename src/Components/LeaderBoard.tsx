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
          entries.map(
            ({name, score}) => (
              <Score
                name={ name }
                score={ score }
              />
            )
          )
        }
      </section>
  )
}
