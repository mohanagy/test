import React from "react";
import "./App.css";
import { Countries } from './features/countries/Countries';

function App() {
  return (
    <div className="App">
      <div className="DropdownContainer">
      <Countries/>
      </div>
    </div>
  );
}

export default App;
