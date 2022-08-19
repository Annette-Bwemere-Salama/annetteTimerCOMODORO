import React, { useState } from "react"

let clockSession;
function IncremeSession() {
    let [second, setSecond] = useState(59)
    let [minute, setMinute] = useState(25)
    let [pause, setPause] = useState(true)
    const clock = () => {
        clockSession = setInterval(() => {
            if (second >=0) {
                setSecond(second--)
            }
            else{
                setSecond(second += 60)
                setMinute(minute -= 1)
            }
        }, 1000)
    }
    return (
        <React.Fragment>
            <div className="sessiobord">
                <p id="timer-label">Session</p>
                <p id="time-left">
                    {`${minute}:${second}`}
                </p>
            </div>
            <span id="start_stop" class="material-symbols-outlined" onClick={() => {
                if (!pause) {
                    setPause(true)
                    clock()
                } else {
                    setPause(false)
                    clearInterval(clockSession)
                }
            }}>
                play_pause
            </span>
            <span id="reset" class="material-symbols-outlined" onClick={()=>{
                setSecond(59)
                setMinute(25)
                setPause(true)
                clearInterval(clockSession)

            }}>
                restart_alt
            </span>
        </React.Fragment>
    );
}

export default IncremeSession;
