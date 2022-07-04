import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props =>{
  const [ personsState,setPersonsState ] = useState({
        persons:[
          {name: "Gokul",age: 23},
          {name:"Balu",age: 19},
          {name:"Raj",age: 31}
        ],
        otheState:'Other val'
      });
      
  const  switchNameHandler = () =>{
      // calling this actually replaces the state not as same as class setState(which actually rerender the particular object)
      setPersonsState({
        persons:[
          {name: "Max",age: 23},
          {name:"Balu",age: 19},
          {name:"Raj",age: 31}
        ],
        otheState:personsState.otheState
      })
    }
  
// class App extends Component {

//   state = {
//     persons:[
//       {name: "Gokul",age: 23},
//       {name:"Balu",age: 19},
//       {name:"Raj",age: 31}
//     ],
//     otheState:'Other val'
//   }


 
    return (
      <div className="App">
        <h1>Hi,I'm React Developer</h1>
        <p>This is working</p>
        <button onClick={switchNameHandler}>Switch Button</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Here from Balu</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/> 
      </div>
    );
    //return React.createElement('div',{className:App},React.createElement('h1',null,'Hi, I\'m a React developer'))
  

}

export default app;
