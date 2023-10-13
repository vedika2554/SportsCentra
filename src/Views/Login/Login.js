import React from "react";
import "./Login.css";

import user_icon from './../../Components/Image/person.png';
import email_icom from './../../Components/Image/email.png';
import user_icon from './../../Components/Image/password.png';


function Login()
    {
        return(
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action==="login"?<div></div>:<div className="input">
                        <img src={user_icon} alt=""/>
                        <input type="text" placeholder="Name"/>
                     </div>   }
                     <div className="input">
                        <img src={email_icon} alt=""/>
                        ,<input type="email" placeholder="Email Id"/>
                     </div>
                     <div className="input">
                        <img src={email_icon} alt=""/>
                        ,<input type="email" placeholder="Email Id"/>
                     </div>
                     <div className="input">
                        <img src={email_icon} alt=""/>
                        ,<input type="password" placeholder="password"/>
                     </div>
                </div>
            </div>

        )

    }


export default Login