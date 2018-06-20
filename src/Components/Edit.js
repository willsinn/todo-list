import React, { Component } from 'react';

class Edit extends Component {


  handleChange = (event) => {
    this.setState

  }

  handleSubmit = (event) => {
    const value = this.state.editText.trim();
    if (value) {
            this.props.onSave(value);
            this.setState({editText: value});
    } else {
            this.props.onDestroy();
    }

  }

  render() {
    return(
      <div className="Edit-Component">
      <button onClick={() =>
        this.props.handleEdit(this.props.index)}>
         Edit
      </button>
      </div>
    );

  }
}

export default Edit;
