import React from "react";
import "./App.css";
import Sharing from "./components/sharing";
import Newsletter from "./components/newsletter";

function App() {
  return (
    <div className="body">
      <div className="row margintop8em" id="landingPage">
        <div className="column" id="newsletter">
          <Newsletter />
        </div>
        <div className="column" id="sharing">
          <Sharing />
        </div>
      </div>
    </div>
  );
}

export default App;
