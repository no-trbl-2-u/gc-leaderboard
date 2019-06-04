import React, { useEffect } from 'react';

export interface LayoutSelectionProps {
  path: string
}

function LayoutSelection (props: LayoutSelectionProps) {
  useEffect(() => {
    console.log("Loaded Layout Selection")
  })
  return (
    <div className="Selection-Page">
      <div className="Selection-Container">
        <h1 className="Selection-Header">Groove Catcher VR Score Collection</h1>
        <select name="selection-dropdown" className="Selection-Dropdown">
          <option> -- Select Tournament --</option>
        </select>
      </div>
    </div>
  );
}

export default LayoutSelection