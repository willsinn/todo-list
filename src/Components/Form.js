import React, { Component } from 'react';

class Form extends Component {




  render() {
    return(
      <div className="Form">
      <h1 className="Form-Header">
        Wills Todos
      </h1>
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <input
            onChange={(e) => this.props.handleChange(e)}
            value={this.props.inputValue}
          />
        </form>
      </div>

    );
  }
}

export default Form;
