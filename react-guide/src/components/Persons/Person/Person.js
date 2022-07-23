import React , {Component,Fragment} from "react"
import './Person.css'
import Radium from "radium"
import styled from "styled-components"

const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    text-align: center;
    padding-bottom: 10px;

    @media (min-width: 500px) {
        width: 450px; 
    } 

`;

class Person extends Component {
render(){
   console.log('[Person.js] rendering ....') 
    return (
        <Fragment>
    
        <p onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} year old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </Fragment>
    )
}
}

export default Radium(Person);