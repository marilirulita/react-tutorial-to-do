import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {

  render() {
    return (
      <ul>
        {this.props.todos.map(elem => (
          <TodoItem key={elem.id} todo={elem} />
        ))}
      </ul>
    )      
  }
    
}

export default TodosList;