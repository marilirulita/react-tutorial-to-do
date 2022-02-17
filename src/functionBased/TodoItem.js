import React, {useState} from "react";
import styles from "./TodoItem.module.css";

const TodoItem = props => {
  const [editing, setupEditing] = useState(false);

  const handleDoubleClick = () => {
    setupEditing(true);
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      setupEditing(false);
    }
  };

  // componentWillUnmount() {
  //   console.log("Cleaning up...");
  // }

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    let editMode = {};
    let viewMode = {};
    if (editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    const { id, title, completed } = props.todo;

    return (
      <li className={styles.item}>
        <div onDoubleClick={handleDoubleClick} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => props.handleChange(id)}
          />
          <button onClick={() => props.handleDelete(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={(e) => {
            props.handleEdit(e.target.value, id);
          }}
          onKeyDown={handleEnterKey}
        />
      </li>
    );
  }

export default TodoItem;
