import React, { useState, useEffect } from "react";

const User = (props) => {
    const [userInfo, setUserInfo] = useState({
        name: 'DummyName',
        location: 'defaultLocation',
        avatar_url: 'DummyPhoto'
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://api.github.com/users/ailu96');
            const json = await data.json();
            setUserInfo(json);
        };
        fetchData();

        return () => {
            console.log('Unmount will be called when the component is closed');
        };
    }, []);

    const { name, location, avatar_url } = userInfo;

    return (
        <div className="user-card">
            <img className="gitLogo" src={avatar_url} alt="User Avatar"></img>
            <h2>Name: {name}</h2>
            <h3>Location : {location}</h3>
            <h3>Title: Senior Software Engineer</h3>
            <h3>Contact: {props.contact}</h3>
        </div>
    );
};

export default User;
