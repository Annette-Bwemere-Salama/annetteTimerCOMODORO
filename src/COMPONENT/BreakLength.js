import React from "react";
import "./BreakLength.css";
const nomDuProject = "25+5 Clock";

class IncrementationVC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vc: 25,
    };
  }
  render() {
    return (
      <div className="container">
        <h1>{nomDuProject}</h1>
        <div id="break-label">
          <p>BreakLength</p>
          <div className="nombreArrow">
            <span
              id="break-decrement"
              class="material-symbols-outlined"
              onClick={() => {
                if (this.state.vc > 1)
                  this.setState((state, props) => ({ vc: state.vc - 1 }));
              }}
            >
              arrow_downward
            </span>
            <p id="session-length">{this.state.vc}</p>
            <span
              id="break-increment"
              class="material-symbols-outlined"
              onClick={() => {
                if (this.state.vc <= 59)
                  this.setState((state, props) => ({ vc: state.vc + 1 }));
              }}
            >
              arrow_upward
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default IncrementationVC;
