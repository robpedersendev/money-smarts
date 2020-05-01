import React from "react";
import "./styles/App.scss";
// import Sharing from "./components/sharing";
import Calc from "./components/Form";

function App() {
  return (
    <div className="app">
      <div id="formContainer">
        <Calc />
      </div>
    </div>
  );
}

export default App;
