import React from "react";
import styles from './TodoItem.module.css'

class TodoItem extends React.Component {
  state = {
    editing: false,
  }

  handleDoubleClick = () => {
    this.setState({
      editing: true,
    })
  }

  handleEnterKey = e => {
    if (e.key === "Enter") {
      this.setState({
        editing: false,
      })
    }
  }

  componentWillUnmount() {
    console.log("Cleaning up...")
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    let editMode = {}
    let viewMode = {}
    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    const {id, title, completed} = this.props.todo;

    return (
      <li className={styles.item}><div onDoubleClick={this.handleDoubleClick} style={viewMode}>
        <input type="checkbox" className={styles.checkbox} checked={completed} onChange={() => this.props.handleChange(id)} />
        <button onClick={() => this.props.handleDelete(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input type="text" className={styles.textInput} style={editMode} value={title} onChange={e => {
        this.props.handleEdit(e.target.value, id)
      }} onKeyDown={this.handleEnterKey}/>
      </li>
    ) 
  }
}

export default TodoItem;