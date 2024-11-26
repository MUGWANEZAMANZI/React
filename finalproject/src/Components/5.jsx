import React from "react";

function MapDisp() {
  const b = ["Mugabo", "Mugwaneza", "Mfitumurengezi"];

  return (
    <div>
      <h1>Displaying using map</h1>
      <ol>
        {/* Use map to render each name in a <li> */}
        {b.map((name, index) => (
          <li key={index}>{name}</li> // This renders each name in a list item
        ))}
      </ol>
    </div>
  );
}

export default MapDisp;
