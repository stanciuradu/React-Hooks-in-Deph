// ->cod pentu afisarea unui ceas
import React, { useState, useEffect } from "react";

function UseEffect() {
  // prima data setam state-ul initial si o metoda de reset a acestuia
  // setez ca state initial timpul curent prin new Date()
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    // imi doresc ca ceasul randat sa se modifice la fiecare secunda, motiv pentu care voi folosit setTimeout
    // in cadrul functei de rset voi folosit new Date si un tim de 1s pentru afisarea ceasului
    const timer = setTimeout(() => setTime(new Date()), 1000);
    // prin clearTimeOut se sterge tempozirizarea
    return () => clearTimeout(timer);
  });
  return (
    <div>
      {/* utilizez metoda toLocalTimeString pentru a afisa portiunea de timp a unei date */}
      <h1 className='title'>Use Effect Example:{time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default UseEffect;
