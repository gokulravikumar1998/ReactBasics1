import React , {Component} from "react";
import ErrorBoundary from "../ErrorBoundry/ErrorBoundary";
import Person from './Person/Person'

class Persons extends Component {

    static getDerivedStateFromProps (props,state) {
        console.log('[Persons.js] getDerivedStateFromProps')
        return state
    }
    shouldComponentUpdate(nextProps,nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        // save some data or the scoll position before update(componetDidUpdate)
        console.log('[Persons.js] getSnapShotBeforeUpdate')
        return {message: 'Snapshot!'}
        
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        //most oftern used hook after fetch data from server
        console.log("[Persons.js] componentDidUpdate")
        console.log(snapshot)
    }
    render(){
    console.log('[Persons.js] rendering....')
    return this.props.persons.map((person,index)=>{
        return  <ErrorBoundary  key={person.id} >
            <Person click={()=>this.props.clicked(index)}
            name={person.name} 
            age={person.age} 
            changed={(event)=>this.props.changed(event,person.id)}/>
        </ErrorBoundary>
        
    }

)
    }
};

export default Persons;