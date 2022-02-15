import React from "react";
import Header from "./Header";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: false
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
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
      id: this.state.todos.length + 1,
      title: title,
      completed: false
     }
     this.setState({
       todos: [...this.state.todos, newItem]
     })
   }

  render() {
    return (
      <div>
        <Header />
        <InputTodo handleSubmitProps={this.addNewItem} />
        <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} handleDeleteProps={this.handleDelete} />
      </div>
    )
  }
}

export default TodoContainer