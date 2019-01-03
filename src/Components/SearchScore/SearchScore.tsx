import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';


export interface SearchScoreProps {
  entries: any[];
}

export default function
  SearchScore (props: SearchScoreProps) {
    const { entries } = props;
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
        />

      </div>
    );
}

// SearchScore -> SearchBar ++ SearchResults
