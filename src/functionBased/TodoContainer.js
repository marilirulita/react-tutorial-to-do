import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";

const TodoContainer = () => {
  const [todos, addTodos] = useState([]);

   const handleChange = id => {
    addTodos(prevState => 
      prevState.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      }))
   }

  const handleDelete = id => {
    addTodos([
        ...todos.filter(todo => todo.id !== id)
    ])
  }

  const addNewItem = title => {
     const newItem = {
      id: uuidv4(),
      title: title,
      completed: false
     }
     addTodos([...todos, newItem])
   }

  const handleEdit = (updateTitle, id) => {
    addTodos(todos.map(todo => {
         if (todo.id === id) {
           todo.title = updateTitle
         }
         return todo
     }))
   }
  
  // const componentDidMount() {
  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)
  //   if (loadedTodos) {
  //     setState({
  //       todos: loadedTodos
  //     })
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.todos !== state.todos) {
  //     const temp = JSON.stringify(state.todos)
  //     localStorage.setItem("todos", temp)
  //   }
  // }

    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo handleSubmit={addNewItem} />
          <TodosList todos={todos} handleChange={handleChange} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
      </div>
    )
}

export default TodoContainer