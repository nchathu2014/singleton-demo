import React from "react";

const RedButton = ({ bgcolor, setBackgroundColor }) => {
  console.log("RED");
  return (
    <div style={{ border: "1px solid black" }}>
      <h3>Red Button Component</h3>
      <button
        onClick={() => setBackgroundColor("yellow")}
        style={{ backgroundColor: `${bgcolor}` }}
      >
        Reset
      </button>
    </div>
  );
};

export default RedButton;
