import React from "react";
import ReactDOM from "react-dom";
import "./classBased/App.css";
import TodoContainer from "./functionBased/TodoContainer";
//import { HashRouter as Router } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './functionBased/pages/About';
import NotMatch from './functionBased/pages/NotMatch';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
