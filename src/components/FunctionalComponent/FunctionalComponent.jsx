import React, { useContext } from "react";
import { CounterContext } from "../CounterContext";

function FunctionalComponent() {
  // preiau valoarea pasata ca props
  const { increment, setIncrement } = useContext(CounterContext);
  return (
    <div className="functional-component">
      <h1>Functional component</h1>
      {/* o randez */}
      <h1>{increment}</h1>
      <div className="buttons">
        <button type="button" onClick={() => setIncrement(increment + 1)}>
          Increment
        </button>
        <button type="button" onClick={() => setIncrement(increment - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default FunctionalComponent;
