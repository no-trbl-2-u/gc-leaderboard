import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


export interface SearchScoreProps {
  entries: any[];
  event: string;
}

export default function
  SearchScore (props: SearchScoreProps) {
    const { entries, event } = props;
    const [inputValue, setInputValue] = useState("");
    
    return (
      <div className="SearchScore-container">
        <h2 className="searchQuestion">Don't see your score? Search for it here:</h2>
        <SearchBar 
          inputValue={ inputValue }
          setInputValue={ setInputValue }
        />

        <SearchResults 
          inputValue={ inputValue }
          entries={ entries }
          event={ event }
        />

      </div>
    );
}

// SearchScore -> SearchBar ++ SearchResults
