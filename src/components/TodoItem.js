import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
      return (
          <h1>{this.props.todo.title}</h1>
      );
    }
}
export default TodoItem;