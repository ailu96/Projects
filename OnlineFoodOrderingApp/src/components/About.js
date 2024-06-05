import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props)
        //console.log("Parent class Constructor")
    }
    componentDidMount(){
       // console.log("Parent class Component mounted")
    }
    render(){
        //console.log("Parent class Render")
        return(
            <div><h1>About</h1>
            <h2>React From Santhosh Nama</h2>
            <UserClass name="Santhosh Nama(Class)" location="US" contact="@ailu96"></UserClass>
            
            </div>    
        );
    }
}



export default About;