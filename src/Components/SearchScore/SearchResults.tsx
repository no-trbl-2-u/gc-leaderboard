import React from 'react';
import Score from '../Score';

export interface SearchResultsProps {
  inputValue: string;
  entries: any[];
  event: string;
}

const genSearchResults = (entries: any[], inputValue: string): JSX.Element[] => {
  return (
    [...entries]
    .sort((a, b) => b.score - a.score)
    .map((ea, index) => ({...ea, 'place': index + 1 }))
    .filter(ea => inputValue
      ? ea.name.toLowerCase().includes(inputValue.toLowerCase())
      || ea.song.toLowerCase().includes(inputValue.toLowerCase())
      : false )
    .map(({name, score, place, available, song}, index) => (
      <Score
        key={ index }
        name={ name }
        score={ score }
        top3={""}
        place={ place }
        available={ available }
        song={ song }
      />
  ))
  )
}

export default function 
  SearchResults (props: SearchResultsProps) {
    const { inputValue, entries, event } = props
    return (
      <div className="LeaderBoard-container">
        <div className="out-of"> (Out of <span className="twitter">{ entries.length }</span> players at { event })</div>
        {
          inputValue !== "" 
            ? genSearchResults(entries, inputValue)
            : <p className="noResults">Results will be shown here</p>
        }
      </div>
    );
}
