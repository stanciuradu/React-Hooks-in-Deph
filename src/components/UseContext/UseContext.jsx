import React, { useState } from "react";
import "../../components/UseContext/UseContext.css";
import FunctionalComponent from "../FunctionalComponent/FunctionalComponent";
import { CounterContext } from "../CounterContext";

function UseContext() {
  const [increment, setIncrement] = useState(0);

  return (
    <div className="use-context">
      <h1>UseContext Component</h1>
      {increment}
      <div className="buttons">
        <button type="button" onClick={() => setIncrement(increment + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setIncrement(increment - 1)}>
          Decrement
        </button>
      </div>
      {/* context API are un provider iar prin props-ul value pasez state-ul catre celelalte componente */}
      <CounterContext.Provider value={{ increment, setIncrement }}>
        <FunctionalComponent />
      </CounterContext.Provider>
    </div>
  );
}

export default UseContext;
