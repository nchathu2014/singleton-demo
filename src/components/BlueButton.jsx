import React from "react";

const BlueButton = ({ bgcolor, setBackgroundColor }) => {
  console.log("BLUE");
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>Blue Button Component</h3>
      <button
        onClick={() => setBackgroundColor("yellow")}
        style={{ backgroundColor: `${bgcolor}` }}
      >
        Reset
      </button>
    </div>
  );
};

export default BlueButton;
