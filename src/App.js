import React from "react";

import "./App.css";
import BreakLength from "./COMPONENT/BreakLength.js";
import Sessionbord from "./COMPONENT/session";
import SessionLength from "./COMPONENT/SessionLength";

function App() {
  return (
    <React.Fragment>
      <BreakLength />
      <SessionLength />
      <Sessionbord />
    </React.Fragment>
  );
}

export default App;
