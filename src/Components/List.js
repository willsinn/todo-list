import React, { Component } from 'react';
import Task from './Task';

class List extends Component {

  state = {
    todos: [
      { value: 'Take out trash', done: false },
      { value: 'Finish portfolio', done: true }
    ]
  }


  render() {
    return(
      <div className="List">
        {this.state.todos.map((todo, index) => {
          return (
             <Task
             key={index}
             todo={todo}
             />
          )
        })}
      </div>
    );
  }
}

export default List;
