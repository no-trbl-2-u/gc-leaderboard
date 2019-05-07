import React from 'react';
import Score from '../Score';

export interface AllScoresProps {
  entries: any[];
  event: string;
}

const scores = (entries: IEntry[]): JSX.Element[] => [...entries]
  .sort((a, b) => Number(b.score) - Number(a.score))
  // .filter(ea => ea.score > 40000)
  .map(
    ({name, score, available}, index: number) => (
      <Score
        key={ index }
        place={ index + 1 }
        name={ name }
        score={ (Number(score)) }
        top3={""}
        // TODO: Bad workaround for available
        available={ "true" }
      />
    )
  )

  
export default function 
AllScores(props: AllScoresProps): JSX.Element {
  const { entries, event } = props
  console.log(entries)
  return (
    <section className="LeaderBoard-container">
      <header className="LeaderBoard-header">{ event }</header>
      {
        scores(entries)
      }
    </section>
  )
}