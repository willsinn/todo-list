import React, { Component } from 'react';

class Task extends Component {



  render() {
    return(
      <div className="Task Component">
        <span style={{ textDecoration: this.props.todo.done ? 'line-through': 'none' }}>
          {this.props.todo.value}
        </span>
        <button onClick={this.props.handleClick}> {this.props.todo.done ? 'Undo': 'Complete'} </button>
      </div>
    );
  }
}

export default Task;
