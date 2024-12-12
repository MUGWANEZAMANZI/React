import React from "react";

function MapDisp() {
  const b = ["Mugabo", "Mugwaneza", "Mfitumurengezi"];

  return (
    <div className="m-4">
      <h1>Displaying using map</h1>
      <ol>
        {b.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </div>
  );
}

export default MapDisp;
