import React, { Component } from 'react';
import './App.css';

import Radium , { StyleRoot } from 'radium';
import Person from '../components/Persons/Persons'

import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  state = {
    persons:[
      {name: "Gokul",age: 23,id : "q1"},
      {name:"Balu",age: 19,id : "q2"},
      {name:"Raj",age: 31,id : "q3"},
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
 
  nameChangeHandler = (event,id ) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({persons:persons})
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({
      showPersons:!doesShow
    })

  }

  deletePersonsHandler = (personsIndex) =>{
    //const persons = this.state.persons.slice(); //slice make a copy 
    const persons = [...this.state.persons]
    persons.splice(personsIndex,1);
    this.setState({persons:persons})
  }
    

  render() {


    let persons = null;
    if (this.state.showPersons) {
      persons = <Person persons={this.state.persons} 
        clicked={this.deletePersonsHandler} 
        changed={this.nameChangeHandler}/>
        
    }
    //let classes = ['red','bold'].join(' '); //withput dot from app.css
  
    return (
      
      <div className="App">
        <Cockpit show={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
      
    );
    //return React.createElement('div',{className:App},React.createElement('h1',null,'Hi, I\'m a React developer'))
  }

}

export default Radium(App);