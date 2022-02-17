import React from "react";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  return (
    <ul>
      {props.todos.map((elem) => (
        <TodoItem
          key={elem.id}
          todo={elem}
          handleChange={props.handleChange}
          handleDelete={props.handleDelete}
          handleEdit={props.handleEdit}
        />
      ))}
    </ul>
  );
};

export default TodosList;
