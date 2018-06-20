import React, { Component } from 'react';

class Task extends Component {

constructor(props){
  super(props);
  this.state= { editing:false }
}

  handleEditing(event) {
    this.setState({ editing:true })
  }

  handleEditingDone(event) {
    if (event.keyCode === 13)
      this.setState({editing: false});
  }


  render() {
      var todo = this.props.todo;

      var viewStyle = {};
      var editStyle = {};

      if (this.state.editing) {
        viewStyle.display = 'none';
      } else {
        editStyle.display = 'none';
      }
    return(
      <li className="Task Component">
        <span style={{ textDecoration: this.props.todo.done ? 'line-through': 'none' }}>
          {this.props.todo.value}
        </span>
        <button onClick={ () =>
          this.props.handleCompleteToggle(this.props.index)}> {this.props.todo.done ? 'Undo': 'Complete'} </button>
        <input type="text"
              onKeyDown={this.handleEditingDone.bind(this)}
              style= {editStyle}
              value= {todo.inputValue} />
      </li>

    );
  }
}

export default Task;
