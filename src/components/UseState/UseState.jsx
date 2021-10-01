// ->cod pentru schimbarea background-ului unui text la click

import React, { useState } from "react";
import "../UseState/UseState.css";

function UseState() {
  // setez state-ul initial si o metoda de reset
  // prima data ca si state initial am : this.state.isGreenDisplay: true
  const [isGreenDisplay, setIsGreenDisplay] = useState(true);
  return (
    <div className="use-state">
      <h1
        // pe eventul de onClick pun metoda de reset, adica setIsGreenDisplay
        // pe metoda de reset vreau sa schimb state-ul din true in false, motiv pentru care voi nega state-ul initial, operatorul de negare fiind "!"
        onClick={() => setIsGreenDisplay(!isGreenDisplay)}
        // vrem sa schimbam culoarea la click, motiv pentru care utilizam style si un operator ternar
        // daca state-ul initial este true, atunci culoarea va fi green, altfel culoare va fi crimson
        style={{ backgroundColor: isGreenDisplay ? "green" : "blue" }}
      >
        Use state Example
      </h1>
    </div>
  );
}

export default UseState;
