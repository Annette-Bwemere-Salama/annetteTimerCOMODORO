import React from "react";

// import "App.js";
import "./App.css";
import BreakLength from "./COMPONENT/BreakLength.js";
// import "App.js";
/*
import  Header from "./COMPONENT/Header.js";
import Main from "./COMPONENT/Clock.js";
import Mainsection from "./COMPONENT/Mainsection.js";
import FooterIcons from "./COMPONENT/Footer.js";*/
import Clock from "./COMPONENT/Clock.js";
import Session from "./COMPONENT/session";

function App() {
  return (
    <div>
      <Clock />,
      <BreakLength />
      <Session />,
    </div>
  );
}

export default App;
