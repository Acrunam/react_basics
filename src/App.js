/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
    };
    this.switchNameHandler = (newName) => {
      this.setState({
        persons: [
          { name: newName, age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephanie', age: 27 },
        ],
      });
    };
    this.nameChangedHandler = (event) => {
      this.setState({
        persons: [
          { name: 'Max', age: 28 },
          { name: event.target.value, age: 29 },
          { name: 'Stephanie', age: 27 },
        ],
      });
    };
  }

  render() {
    const style = {
      backgroundColor: '#fff',
      font: 'inherit',
      border: '1px solid #91b0ff',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          type="button"
          onClick={this.switchNameHandler.bind(this, 'Max!')}
          style={style}
        >
            Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maximilian')}
          changed={this.nameChangedHandler}
        >
          My hobby is riding motorcycles
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}
export default App;
