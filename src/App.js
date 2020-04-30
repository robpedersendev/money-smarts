import React from "react";
import ComingSoon from "react-coming-soon";

function App() {
  return (
    <div className="body">
      <ComingSoon
        title="Currently under construction"
        subtitle="We are building moneysmarts.app out to ensure a user friendly experience. Please stay tuned for updates."
        bgColor="#212121"
        textColor="#fcb900"
        date="Tue Jun 30 2020 15:00:00 GMT-0600 (Mountain Daylight Time)"
        illustration="planning"
      />
    </div>
  );
}

export default App;
