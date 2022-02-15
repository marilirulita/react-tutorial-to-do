import React, { useState } from "react"

const InputTodo = (props) => {
  const [title, setTitle] = useState("");
  const handleOnChange = e => {
    setTitle(e.target.value) 
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      props.handleSubmit(title);
    setTitle("")
    }
    else {
      alert('Please write an item')
    } 
  }

    return (
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" className="input-text" placeholder="Add Todo..." name="title" value={title} onChange={handleOnChange} />
        <button className="input-submit">Submit</button>
      </form>
    )
}
export default InputTodo