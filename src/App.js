import React from "react";
import Navbar from "./functionBased/Navbar";
import TodoContainer from "./functionBased/TodoContainer";
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="inner">
          <Routes>
            <Route path="/" element={<TodoContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotMatch />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
