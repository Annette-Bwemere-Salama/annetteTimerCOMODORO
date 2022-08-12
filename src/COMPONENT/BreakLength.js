import React from "react";

function BreakLength() {
  return (
    <React.Fragment>
      <div id="break-label">
        <p>BreakLength</p>
      </div>
      <div id="session-label">
        <p>ession Length</p>S
      </div>
      <div>
        <button id="break-decrement">-(1)</button>
        <button id="session-decrement">+(0)</button>
      </div>
      <div>
        <button id="break-increment">-(1)</button>
        <button id="session-increment">+(0)</button>
      </div>
      <p id="break-length">5</p>
      <p id="session-length">25</p>
      <p id="timer-label">Session</p>

      <p id="time-left">mm:ss</p>
      <button id="start_stop">play||stop0</button>
      <button id="reset">reinitialiser</button>
    </React.Fragment>
  );
}

export default BreakLength;
