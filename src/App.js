import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "First Title",
        completed: false
      },
      {
        id: 2,
        title: "Second Title",
        completed: true
      },
      {
        id: 3,
        title: "Third Title",
        completed: true
      }
    ]
  }

  render() {
    return (
      <div className="App">
          <Todos todos={this.state.todos} />
      </div>
    );
  }

}
export default App;
