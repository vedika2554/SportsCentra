import Navbar from './../../Component/Navbar/Navbar'
import Footer from './../../Component/Footer/Footer'
import './../Teammember/Teammember.css';
import vedika from './../../Component/Image/Images/ve.jpg';
import piyush from './../../Component/Image/Images/pi.jpg';
import bhairavi from './../../Component/Image/Images/bh.jpg';
import kashish from './../../Component/Image/Images/sa.jpg';
import anuj from './../../Component/Image/Images/anu.jpg';
import { Link } from 'react-router-dom'
export default function Teammember(){
    return(
        <>
        <Navbar/>
        <div className='opo'>







        <h1 className='tt1'>Team Members</h1>
            <hr className='hre'/>
<div className='ou-te'>
<div className='teamc'>

           <div className='tc1'>
              <img className='memi'src={vedika}/>
              <h1 className='mol'>Vedika </h1>
              <p className='info'>Vedika, effortlessly builds strong connections with clients and stakeholders, elevating our team's reputation and forging lasting partnerships.</p>
              <p className='in-em'>Email : vedika54@gmail.com</p>
              
              <div className='xc'>
              <div className="footer-col">
  	 			<div className="social-links">
  	 				<a href="#"><i class="fa-brands fa-facebook"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
          </div>
           
           </div>
           <div className='tc1'>
              <img className='memi'src={piyush}/>
              <h1 className='mol'>Piyush</h1>
              <p className='info'>Meet Piyush, a talented team member . he has a keen eye for detail and ensures that our work is accurate and precise. he is contributions make our team stronger.</p>
              <p className='in-em'>Email : piyush45@gmail.com</p>

              <div className='xc'>
              <div className="footer-col">
  	 			
  	 			<div className="social-links">
  	 				<a href="#"><i class="fa-brands fa-facebook"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
</div>

           
           
           </div>
           <div className='tc1'>
              <img className='memi'src={bhairavi}/>
              <h1 className='mol'>Bhairavi</h1>
              <p className='info'>Bhairavi consistently delivers top-notch work and provides unwavering support to his teammates, making him an invaluable asset to our team.

</p>
              <p className='in-em'>Email : bhairavi12@gmail.com</p>
              <div className='xc'>
              <div className="footer-col">
  	 		
  	 			<div className="social-links">
  	 				<a href="#"><i class="fa-brands fa-facebook"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>

</div>




          </div>
           
        
           
           </div>

           <div className='teamc'>
           
           <div className='tc1'>
              <img className='memi'src={kashish}/>
              <h1 className='mol'>Kashish</h1>
              <p className='info'>Kashish, the charismatic communicator, effortlessly builds strong connections with clients , elevating our team's reputation and forging lasting partnerships.</p>
              <p className='in-em'>Email : kashish98@gmail.com</p>
              

              <div className='xc'>
              <div className="footer-col">
  	 			
  	 			<div className="social-links">
  	 				<a href="#"><i class="fa-brands fa-facebook"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
</div>
          
           
           </div>
           <div className='tc1'>
           <img className='memi'src={anuj}/>
<h1 className='mol'>Himanshu</h1>
<p className='info'>Himanshu, the creative genius, always brings fresh and innovative ideas to the table, fueling our team's success with his unique perspective.</p>
              <p className='in-em'>Email : himanshu2002@gmail.com</p>
             <div className='xc'>
              <div className="footer-col">
  	 			
  	 			<div className="social-links">
  	 				<a href="#"><i class="fa-brands fa-facebook"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>

            </div>

           </div>


          </div>


</div>






     
          </div>
          <Footer/>
          </>
    )
}