import React, { Component } from 'react';
import './App.css';

import Radium , { StyleRoot } from 'radium';
import Person from '../components/Persons/Persons'

import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  constructor(props) {
    //1
    /*
    DO : setup state
    DON'T: cause side-effects(http request)
    */
    super(props);
    console.log("[App.js] constructor")
  }

  state = {
    persons:[
      {name: "Gokul",age: 23,id : "q1"},
      {name:"Balu",age: 19,id : "q2"},
      {name:"Raj",age: 31,id : "q3"},
    ],
    otheState:'Other val',
    showPersons: false
  }

  static getDerivedStateFromProps(props,state) {
    //2
    /*
    DO : sync state as per the props
    DON'T: cause side-effects(http request)
    */
    console.log('[App.js] getDerivedStateFromProps',props)
    return state
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
  
  componentDidMount(){
    //5
    /*
    DO : cause side-effects(http request)
    DON'T: Update state (Don't call set state in here
    unless it's in .let's say the then block of promise
    after you sent an http request but don't call set state 
    in here synchronously.So you can definetely setup some code
    that executes some code in the future which then updates the state ,
    for example when the response from the server is back 
    but dont do it right away when componentDidMount runs that you immeditely call set state
    because that will trigger a re-render cycle and that is bad for performance )
    */
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  render() {
    //3 render
    //Prepare and structure you jsx code
    console.log('[App.js] render')

    let persons = null;
    if (this.state.showPersons) {
      //4 child
      persons = <Person persons={this.state.persons} 
        clicked={this.deletePersonsHandler} 
        changed={this.nameChangeHandler}/>
        
    }
    //let classes = ['red','bold'].join(' '); //withput dot from app.css
  
    return (
      
      <div className="App">
        <Cockpit title={this.props.appTitle} show={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
      
    );
    //return React.createElement('div',{className:App},React.createElement('h1',null,'Hi, I\'m a React developer'))
  }

}

export default Radium(App);