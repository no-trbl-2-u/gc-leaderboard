import React from 'react';
import Score from '../Score';

export interface SearchResultsProps {
  inputValue: string;
  entries: any[];
}

export default function 
  SearchResults (props: SearchResultsProps) {
    const { inputValue ,entries } = props
    return (
      <div className="LeaderBoard-container">
        {
          entries
            .filter(ea => inputValue
              ? ea.name.includes(inputValue)
              : false )
            .map(({name, score}, index) => (
              <Score
                key={ index }
                name={ name }
                score={ score } 
              />
            ))
        }
      </div>
    );
}
