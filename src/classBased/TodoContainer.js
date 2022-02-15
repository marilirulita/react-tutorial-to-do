import React from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
  state = {
    todos: []
   };

   handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id){
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      }),
    }))
   }

   handleDelete = id => {
     this.setState({
       todos: [
         ...this.state.todos.filter(todo => todo.id !== id)
       ] 
     })
   }

   addNewItem = title => {
     const newItem = {
      id: uuidv4(),
      title: title,
      completed: false
     }
     this.setState({
       todos: [...this.state.todos, newItem]
     })
   }

   handleEdit = (updateTitle, id) => {
     this.setState({
       todos: this.state.todos.map(todo => {
         if (todo.id === id) {
           todo.title = updateTitle
         }
         return todo
       })
     })
   }
  
  componentDidMount() {
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem("todos", temp)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo handleSubmitProps={this.addNewItem} />
          <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} handleDeleteProps={this.handleDelete} handleEditProp={this.handleEdit} />
        </div>
      </div>
    )
  }
}

export default TodoContainer