import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons:[
      {name: "Gokul",age: 23},
      {name:"Balu",age: 19},
      {name:"Raj",age: 31}
    ],
    otheState:'Other val'
  }

  switchNameHandler = (newName) =>{
    //this can only be used in the funciton syntax here ,
    // not es5 syntax so that we can reach out to the state

    //this.state.persons[0].name = 'Max' ***NOT RIGHT WAY**
    this.setState({
      persons:[
        {name: newName,age: 23},
        {name:"Balu",age: 19},
        {name:"Raj",age: 31}
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi,I'm React Developer</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler.bind(this,'Tex')}>Switch Button</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this,'Hex')}>Here from Balu</Person>
        <Person 
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/> 
      </div>
    );
    //return React.createElement('div',{className:App},React.createElement('h1',null,'Hi, I\'m a React developer'))
  }

}

export default App;