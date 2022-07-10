import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Radium , { StyleRoot } from 'radium';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundry/ErrorBoundary'
const StyledButton =  styled.button`
  background-color : ${props => props.alt ? 'red':'green'};
  color:white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: ${props => props.alt ? 'salmon':'lightgreen'};
    color: black;
  }

`
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

    //const person = Object.assign({},this.state.persons[personIndex])
    // this.setState({
    //   persons:[
    //     {name: "Gokul",age: 23},
    //     {name: event.target.value , age: 19},
    //     {name:"Raj",age: 31}
    //   ]
    // })

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

    const style = {
      backgroundColor : 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '10px',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (<div>
        {
          this.state.persons.map((person,index)=>{
              return  <ErrorBoundary  key={person.id} ><Person click={()=>this.deletePersonsHandler(index)}
              name={person.name} age={person.age} changed={(event)=>this.nameChangeHandler(event,person.id)}/></ErrorBoundary>
          })
        
        }

        {/* <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this,'Hex')}
        changed = {this.nameChangeHandler}>Here from Balu</Person>
        <Person 
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}/>  */}
        </div>) 
    }
    //let classes = ['red','bold'].join(' '); //withput dot from app.css
    let classes = []
    if (this.state.persons.length<=2){
      classes.push('red')
    }
    if (this.state.persons.length<=1){
      classes.push('bold')
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi,I'm React Developer</h1>
        <p className={classes.join(' ')}>This is working</p>
        <StyledButton alt={this.state.showPersons} onClick={ this.togglePersonsHandler}>Switch Button</StyledButton>
        {persons}
      </div>
      </StyleRoot>
    );
    //return React.createElement('div',{className:App},React.createElement('h1',null,'Hi, I\'m a React developer'))
  }

}

export default Radium(App);