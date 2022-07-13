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
        /*
        return statement are optional
        */ 
       return ()=>{
        console.log("[Cockpit.js] cleanup work in useEffect")
        //run after every render cycle 
       }
    },[]// only when it is rendered and unmounted 
    /*[],[a,b,c(multiple fields depend on)] executes only once *//*[props.persons] conditional execution when person changes only them useeffect runs */)

    useEffect(()=>{
        console.log("[Cockpit.js] 2 useEffect")

        return ()=>{
            //this run first now this can be useful in case you have some operation
            //which actually should be cancelled whenever the component rerenders
            //after it updated so to say
            console.log("[Cockpit.js] 2 cleanup work in useEffect")
            //run after every render cycle
           }
    })
    const assignedClasses = []
    let btnClass = '';
    if (props.show) {
        
        btnClass = classes.Red
    }
    if (props.personsLen<=2){
        assignedClasses.push(classes.red)
    }
    if (props.personsLen<=1){
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

export default React.memo(cockpit)