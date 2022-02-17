import React from "react";
import ReactDOM from "react-dom";
import "./classBased/App.css";
import TodoContainer from "./functionBased/TodoContainer";
//import { HashRouter as Router } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
