// import "./App.css";

import { useState, useEffect } from "react";

const Counter = () => {
  const [state, setState] = useState(0);
  const onButtonClick = () => {
    setState(state + 1);
  };

  useEffect(() => {
    document.title = state;
  }, [state]);

  useEffect(() => {
    if (state === 5) setState(6);
  }, [state]);

  return (
    <>
      <header>
        <p data-testid="counter-number">{state}</p>
        <button data-testid="counter-button" onClick={onButtonClick}>
          click here
        </button>
      </header>
    </>
  );
};
export default Counter;
