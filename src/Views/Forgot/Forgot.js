import Navbar from "./../../Component/Navbar/Navbar";
import Footer from "./../../Component/Footer/Footer";
import { Link } from "react-router-dom";
import './../Forgot/Forgot.css'

export default function forgot(){
    return(
        <>
        <Navbar/>
        <div className="sspa">
        
        <h1 className='tt1'>Forgot password</h1>
            <hr className='hre'/>
        <div className="pass">
            <h1 className="bonj">Forgot Password</h1>
            <input className='user'type='text'placeholder="Username/Email"/>
            <p className="ve">*OTP will be send to registered mobile no.
</p>
<button className="send">
    Send OTP
</button>
<p className="ve">Resend OTP</p>
<input className='user'type='text'placeholder="OTP"/>
<p><button className="sen">
    Submit
</button>
</p>
<p className="ve"><Link className='nik' to='/login'>or create new Account</Link></p>
            </div>
            </div>
        <Footer/>
        </>
    )
}