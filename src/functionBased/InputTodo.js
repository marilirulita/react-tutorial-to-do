import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"
import { IconContext } from "react-icons"

const InputTodo = (props) => {
  const [title, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.handleSubmit(title);
      setTitle("");
    } else {
      alert("Please write an item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        name="title"
        value={title}
        onChange={handleOnChange}
      />
      <IconContext.Provider
  value={{
    color: "darkcyan",
    style: { fontSize: "20px", color: "#5b5b5b" },
    className: "submit-iconn",
  }}
>
      <button className="input-submit"><FaPlusCircle /></button></IconContext.Provider>
    </form>
  );
};
export default InputTodo;
