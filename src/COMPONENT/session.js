import React from "react";

function Sessionbord() {
    return (
        <React.Fragment>
            <div className="sessiobord">
                <p id="timer-label">Session</p>
                <p id="time-left">25:00</p>
            </div>
            <span id="start_stop" class="material-symbols-outlined">
                play_pause
            </span>
            <span id="reset" class="material-symbols-outlined">
                restart_alt
            </span>
        </React.Fragment>
    )
}
export default Sessionbord;
