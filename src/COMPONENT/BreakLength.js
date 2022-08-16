import React from "react";
const nomDuProject = "25+5 Clock";


function BreakLength() {
  return (
    <React.Fragment className="container">
      <h1>{nomDuProject}</h1>
      <main>
        <div id="break-label">
          <p>BreakLength</p>
          <div className="nombreArrow">
            <span id="break-decrement" class="material-symbols-outlined">
              arrow_downward
            </span>
            <p id="session-length">25</p>
            <span id="break-increment" class="material-symbols-outlined">
              arrow_upward
            </span>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default BreakLength;
