import React, { Component } from 'react';
import Form from './Components/Form';
import List from './Components/List';

import './App.css';

class App extends Component {

  state = {
    inputValue: "",
    todos: []
  }


    handleChange = (event) => {
      this.setState({inputValue: event.target.value })
    }

    handleCompleteToggle = (index) => {
      const todos = this.state.todos;
      todos[index].done = !todos[index].done;
      this.setState({ todos:todos });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const newTodo = {
        value: this.state.inputValue,
        done: false
      };
      const todos = this.state.todos;
      todos.push(newTodo);
      this.setState({ todos: todos, inputValue: '' })
    }


  render() {
    return (
      <div className="App">
        <Form
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}
        />
        <List
          handleCompleteToggle={this.handleCompleteToggle}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
