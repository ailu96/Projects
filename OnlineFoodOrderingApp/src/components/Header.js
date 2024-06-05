import {LOGO_URL} from '../utils/constants'; //Named Exports
import { useState,useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
const Header=()=>{

    let btnName="Login";
    const [btnNameReact,setbtnNameReact]= useState("Login")

    const loggedInUser=useContext(UserContext);
   //if no dependency array => useEffect is called on every render
   // if dependency array is empty => useEffect is called only on intial render(just once)
   // if dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated 
   useEffect(()=>{
   console.log('useEffect is called')
   },[])

   const onlineStatus=useOnlineStatus();

   //Subscribing to the store using selector
   const cartItems=useSelector((store) => store.cart.items);
   
    return(
        <div className="flex justify-between bg-orange-300 shadow-lg mb-2">
            <div className='logo-container'>
            
                <img className="w-28" src={LOGO_URL}></img>
            </div>
            
            <div className='flex items-center'>
                <ul className="flex p-4 m-4">
                    <li className='px-4'>onlineStatus:{onlineStatus ?"✅":"🛑"}</li>
                    <li className='px-4'><Link to="/">Home</Link></li>
                    <li className='px-4'><Link to="/About">About</Link></li>
                    <li className='px-4'><Link to="/contact">Contact US</Link></li>
                    <li className='px-4'><Link to="/Grocery">Grocery</Link></li>
                    <li className='px-4'><Link to="/Cart">Cart ({cartItems.length} items)</Link></li>
                    <button className='login-btn' 
                    onClick={()=>
                    {
                         (btnNameReact == 'Login'?setbtnNameReact("Logout"):setbtnNameReact("Login"))
                }
                    }>{btnNameReact}
                    </button>
                    <li className='px-4 font-bold'>{loggedInUser.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}; 

export default Header;