import React from 'react';
import Score from '../Score';

export interface SearchResultsProps {
  inputValue: string;
  entries: any[];
}

export default function 
  SearchResults (props: SearchResultsProps) {
    const { inputValue, entries } = props
    return (
      <div className="LeaderBoard-container">
        <div className="out-of"> (Out of <span className="twitter">{ entries.length }</span> players at MagFest 2019)</div>
        {
          inputValue !== "" 
            ? 
              [...entries].sort((a, b) => b.score - a.score)
              .map((ea, index) => ({...ea, 'place': index }))
              .filter(ea => inputValue
                ? ea.name.toLowerCase().includes(inputValue.toLowerCase())
                : false )
              .map(({name, score, place}, index) => (
                <Score
                  key={ index }
                  name={ name }
                  score={ score }
                  top3={""}
                  place={ place }
                />
              ))
            : <p className="noResults">Results will be shown here</p>
        }
      </div>
    );
}
