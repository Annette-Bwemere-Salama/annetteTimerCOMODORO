import React from "react";

class Incrementation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: 5 };
  }


  render() {
    return (
      <div id="session-label">
        <p>Session Length</p>
        <div className="nombreArrow">
          <span
            id="session-decrement"
            class="material-symbols-outlined"
            onClick={() => {
              if (this.state.n >= 1)
                this.setState((state, props) => ({ n: state.n - 1 }));
            }}
          >
            arrow_downward
          </span>
          <p id="break-length"> {this.state.n}</p>
          <span
            id="session-increment"
            class="material-symbols-outlined"
            onClick={() => {
              if (this.state.n <= 29)
                this.setState((state, props) => ({ n: state.n + 1 }));
            }}
          >
            arrow_upward
          </span>
        </div>
      </div>
    );
  }
}

export default Incrementation;
