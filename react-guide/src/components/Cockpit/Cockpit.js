import React from "react"

import "./Cockpit.css"

const cockpit = (props) =>{

    const assignedClasses = []
    let btnClass = '';
    if (props.show) {
        
        btnClass = "Red"
    }
    if (props.persons.length<=2){
        assignedClasses.push("red")
    }
    if (props.persons.length<=1){
      assignedClasses.push("bold")
    }
    return (
        
        <div className={"Cockpit"}>
        <h1>Hi,I'm React Developer</h1>
        <p className={assignedClasses.join(' ')}>This is working</p>
        <button className={btnClass} onClick={ props.clicked}>Switch Button</button>

        </div>
        
    )

}

export default cockpit