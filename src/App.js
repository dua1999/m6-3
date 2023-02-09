import "./App.css";
import { useState } from "react";

import Counter from "./Counter";

const App = () => {
  const [state, setState] = useState(0);
  const onButtonClick = () => {
    setState(state + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>This counter will skip number 5</h2>
        <Counter />
        <h2>This is a regular counter</h2>
        <p>{state}</p>
        <button onClick={onButtonClick}>click here</button>
      </header>
    </div>
  );
};
export default App;
