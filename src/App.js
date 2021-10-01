import React from "react";
import UseState from "./components/UseState/UseState";
import UseEffect from "./components/UseEffect";
import UseContext from "./components/UseContext/UseContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UseState />
      <UseEffect />
      <UseContext />
    </div>
  );
}

export default App;
