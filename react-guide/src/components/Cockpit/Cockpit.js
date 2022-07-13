import React, {useEffect} from "react"

import classes from "./Cockpit.module.css"


const cockpit = (props) =>{

    useEffect(()=>{
        /*getDerivedStateFromProops is not requuired in use effect 
        we can pass the state  in props and change that*/ 
        console.log("[Cockpit.js] useEffect")
        /*Http req can also be sent 
        componentDidMount and componentDidupdate in one 
        */

        /*useEffect is tricky to use Now what if we were to send the 
        an Http request here but we only want to do 
        that when the component is rendered not for every rerender cycyle settimeout */
        
        setTimeout(()=>{
            alert('Saved to cloud')
        },1000)
    },[]/*[],[a,b,c(multiple fields depend on)] executes only once *//*[props.persons] conditional execution when person changes only them useeffect runs */)

    const assignedClasses = []
    let btnClass = '';
    if (props.show) {
        
        btnClass = classes.Red
    }
    if (props.persons.length<=2){
        assignedClasses.push(classes.red)
    }
    if (props.persons.length<=1){
      assignedClasses.push(classes.bold)
    }
    return (
        
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is working</p>
        <button className={btnClass} onClick={ props.clicked}>Switch Button</button>

        </div>
        
    )

}

export default cockpit