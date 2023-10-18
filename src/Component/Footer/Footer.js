import React from "react";
import "./Footer.css";



function Footer(){
    return(

        <footer className="footer">
			<h1 className="tital">Sports Centra</h1>
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Sport Category</h4>
  	 			<ul>
  	 				<li><a href="#">Team Sport</a></li>
  	 				<li><a href="#">Outdoor Sport</a></li>
  	 				<li><a href="#">Indoor Sport</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Our Services</h4>
  	 			<ul>
  	 				<li><a href="#">Find New</a></li>
  	 				<li><a href="#">Nearby Store</a></li>
  	 				<li><a href="#">Sport Gallary</a></li>
  	 				<li><a href="/News">Sport News</a></li>
  	 				<li><a href="/Sports">Sport Equipment</a></li>
  	 			</ul>
  	 		</div>
			   <div className="footer-col">
  	 			<h4>About Us</h4>
  	 			<ul>
  	 				<li><a href="#">Our Store</a></li>
  	 				<li><a href="#">About us</a></li>
  	 				<li><a href="#">Contact Us</a></li>
  	 				<li><a href="/Teammember">Team Member</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Terms & Condition</a></li>
  	 				<li><a href="#">Privacy Policy</a></li>
  	 				
  	 			</ul>
  	 		</div>
			   <div className="footer-col">
  	 			<h4>More Info</h4>
  	 			<ul>
  	 				<li><a href="#">Our Store</a></li>
  	 				<li><a href="#">Special Offer</a></li>
  	 				<li><a href="#">Recent Reviews</a></li>
  	 				<li><a href="#">Trading Sports</a></li>
  	 			</ul>
  	 		</div>
			   
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i class="fa-brands fa-facebook"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
	   <hr/>

<h2>Regestered office</h2>
<p>404,Laxmi Heights, Above Lotus Multispeciality Hospital
  Manjari BK,Pune-412307. Person who may be contacted in case of any compliance related queries or grievances : Vedika Yadav (Vedika.y@Sportcentra.in)</p>
  <hr/>

<div >
  <p className="cen">&copy; Sport Centra. All rights reserved.</p>
</div>
  </footer>

    )
}

export default Footer