import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi,I'm React Developer</h1>
        <p>This is working</p>
        <Person name="Gokul" age="23" />
        <Person name="Balu" age="19">Here from Balu</Person>
        <Person name="Raj" age="31"/> 
      </div>
    );
    //return React.createElement('div',{className:App},React.createElement('h1',null,'Hi, I\'m a React developer'))
  }

}

export default App;
