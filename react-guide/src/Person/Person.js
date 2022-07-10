import React from "react"
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
const person = (props) =>{
    const k = Math.random();
    if (k < 0.7) {

        throw ("something went wrong")
    }
    
    return (
    
    <StyleDiv>
        <p onClick={props.click}>I'm a {props.name} and I'm {props.age} year old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </StyleDiv>
    )
}

export default Radium(person);