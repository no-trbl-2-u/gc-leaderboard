// SearchBar.tsx
import React from 'react';

export interface SearchBarProps {
  inputValue: string,
  setInputValue: any,
}

export default function
  SearchBar (props: SearchBarProps) {
    const { inputValue, setInputValue } = props

    const handleText = (event: any) => {
      const { value } = event.target
      setInputValue(value)
    }

    return (
        <input
          className="SearchBar"
          type="text"
          value={ inputValue }
          onChange={ event => handleText(event) }
        />
    );
}
