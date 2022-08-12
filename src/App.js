import React from "react";




import "./App.css";
import BreakLength from "./COMPONENT/BreakLength.js";

import Clock from "./COMPONENT/Clock.js";
import Session from "./COMPONENT/session.js";
import Footer from "./COMPONENT/footer.js";

function App() {
  return (
    <React.Fragment>
      <Clock />,
      <BreakLength />
      <Session />,
      <Footer />,
    </React.Fragment>
  );
}

export default App;
