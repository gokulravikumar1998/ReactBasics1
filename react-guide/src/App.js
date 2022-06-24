import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons:[
      {
        name: "Gokul",
        age: 23
      },
      {
        name:"Balu",
        age: 19
      },
      {
        name:"Raj",
        age: 31
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi,I'm React Developer</h1>
        <p>This is working</p>
        <button>Switch Button</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Here from Balu</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> 
      </div>
    );
    //return React.createElement('div',{className:App},React.createElement('h1',null,'Hi, I\'m a React developer'))
  }

}

export default App;
