import React from "react"
import ReactDOM from "react-dom"
import './classBased/App.css'
import TodoContainer from "./classBased/TodoContainer"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
  document.getElementById("root")
)
