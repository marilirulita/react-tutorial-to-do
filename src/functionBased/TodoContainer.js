import React, { useState, useEffect } from "react";
//import { Route, Switch } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";
import About from "./pages/About";
import NotMatch from "./pages/NotMatch";
import Navbar from "./Navbar";

const TodoContainer = () => {
  const getInitialTodos = () => {
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };
  const [todos, addTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    addTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id) => {
    addTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addNewItem = (title) => {
    const newItem = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    addTodos([...todos, newItem]);
  };

  const handleEdit = (updateTitle, id) => {
    addTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updateTitle;
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <>
      <Navbar />
      {/* <Switch> */}
      <Routes>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo handleSubmit={addNewItem} />
              <TodosList
                todos={todos}
                handleChange={handleChange}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
         </Route>
         </Routes>
       {/* </Switch> */}
    </>
  );
};

export default TodoContainer;
