import React, { Component } from 'react';

class Task extends Component {



  render() {
    return(
      <div className="Task Component">
        <span>
          {this.props.todo.value}
        </span>
        <button> Click Me </button>
      </div>
    );
  }
}

export default Task;
