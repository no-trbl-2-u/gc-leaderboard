/*
  Reserved for Selecting which
    High Score Board to show
  
  In The Future:
    * Will have a clickable div...
      ** (Grey, dotted, border) and (+)
      ... that will be used to create
      a new tournament scoreboard
*/

import React from 'react';

export interface LayoutSelectionProps {
  path: string
}

export default
function LayoutSelection (props: LayoutSelectionProps) {
  return (
    <div>
      <h1>You Made it to the Selection</h1>
      <p>HEre is some more text</p>
    </div>
  );
}
