import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: ""
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    }) 
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.handleSubmitProps(this.state.title);
    this.setState({
      title: ""
    })
    }
    else {
      alert('Please write an item')
    }
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add Todo..." name="title" value={this.state.title} onChange={this.handleOnChange} />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo