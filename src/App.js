import { useEffect, useState } from "react";
import BlueButton from "./components/BlueButton";
import RedButton from "./components/RedButton";
import "./styles.css";

import bgcolor from "./utils/color";

export default function App() {
  let initcolor = bgcolor.getColor();
  const [color, setColor] = useState(initcolor);

  const setBackgroundColor = (color) => {
    bgcolor.setColor(color);
    setColor(bgcolor.getColor());

    console.log(bgcolor.getColor());
  };

  return (
    <div className="App">
      <h1>Singleton Desing Pattern - Demo</h1>

      <BlueButton bgcolor={color} setBackgroundColor={setBackgroundColor} />
      <RedButton bgcolor={color} setBackgroundColor={setBackgroundColor} />
      <button onClick={() => setBackgroundColor("blue")}>Blue</button>
      <button onClick={() => setBackgroundColor("red")}>Red</button>
    </div>
  );
}
