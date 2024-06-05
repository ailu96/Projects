import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
       // console.log(this.props.name+" Class Constructor")
        this.state={
            userInfo:{
                name:'DummyName',
                location: 'defaultLocation',
                avatar_url: 'DummyPhoto',
            }

        };
    }

    async componentDidMount(){
       // console.log(this.props.name+" Class Component Mounted")
        const data= await fetch('https://api.github.com/users/ailu96')
        const json= await data.json();
        
        this.setState({
            userInfo:json
        })

    }

    componentWillUnmount(){
        console.log('Unmount will be called when we close or component is closed')
    }
    render(){
       // console.log(this.props.name+"Class Render")
       console.log(this.state.userInfo);
        const {name,location,avatar_url}=this.state.userInfo;
        return(
            <div className="user-card">
           
            <img className="gitLogo" src={avatar_url}></img>
            <h2>Name: {name}</h2>
            <h3>Location : {location}</h3>
            <h3>Title: Senior Software Engineer</h3>
            <h3>Contact:{this.props.contact}</h3>
        </div>
        );
    }
}

export default UserClass;
