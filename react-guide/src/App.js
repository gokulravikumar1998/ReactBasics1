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
    otheState:'Other val',
    showPersons: false
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

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {name: "Gokul",age: 23},
        {name: event.target.value , age: 19},
        {name:"Raj",age: 31}
      ]
    })

  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons:!doesShow
    })

  }

    

  render() {

    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this,'Hex')}
        changed = {this.nameChangeHandler}>Here from Balu</Person>
        <Person 
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/> 
        </div>) 
    }
    return (
      <div className="App">
        <h1>Hi,I'm React Developer</h1>
        <p>This is working</p>
        <button style={style} onClick={ this.togglePersonsHandler}>Switch Button</button>
        {persons}
      </div>
    );
    //return React.createElement('div',{className:App},React.createElement('h1',null,'Hi, I\'m a React developer'))
  }

}

export default App;