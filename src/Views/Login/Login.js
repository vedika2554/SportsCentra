import React from "react";
import Navbar from "./../../Components/Navbar/Navbar";
import Footer from "./../../Components/Footer/Footer";
import "./Login.css";
import { useState } from "react";
import user_icon from './../../Components/Image/person.png';
import email_icom from './../../Components/Image/email.png';
import pass_icon from './../../Components/Image/password.png';
import { Link } from "react-router-dom";


function Login(){

    const [action,setAction] = useState("Login");

    return(
        <>
        <Navbar/>


        
        <div className="mar">
        <h1 className='tt1'>Login</h1>
            <hr className='hre'/>
        <div className="contai">
        <div className="header">
         <div className="text">{action}</div>  
         <div className="underline"></div> 
        </div>
        
        <div className="puts">
        {action==="Login"?<div></div>:<div className="put">
            <img className='ji'src={user_icon} alt=""/>
            <input className="put" type="text" placeholder="Name"/>
        </div> }
         
        <div className="put">
            <img className='ji'src={email_icom} alt=""/>
            <input className="put" type="email" placeholder="Email Id"/>
        </div>

        


        <div className="put">
            <img className='ji' src={pass_icon} alt=""/>
            <input className="put" type="password" placeholder="Password"/>
        </div>  
        </div>
        {action==="Register"?<div></div>:<div className="forgot-password">Lost Password? <span><Link className='lop' to='/forgot'>Click Here!</Link></span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Register")}}>Register</div>
            <div className={action==="Register"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        
    
        </div>
        </div>
        <Footer/>
</>
  
        

    )
}

export default Login