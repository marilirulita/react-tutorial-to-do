import React from "react";
import ReactDOM from "react-dom";
import "./functionBased/App.css";
import TodoContainer from "./functionBased/TodoContainer";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
//import { HashRouter as Router } from "react-router-dom"
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
