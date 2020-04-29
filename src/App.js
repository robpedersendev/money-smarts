import React from "react";
import "./App.css";
import Sharing from "./components/sharing";
import Newsletter from "./components/newsletter";

function App() {
  return (
    <div className="body">
      <div className="hero">
        <div className="centered">
          <Newsletter className="centered_oneline" />
        </div>
      </div>
      <Sharing />
    </div>
  );
}

export default App;
