import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <footer className="footer">
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
  	 				<li><a href="#">Sport News</a></li>
  	 				<li><a href="#">Sport Equipment</a></li>
  	 			</ul>
  	 		</div>
               <div className="footer-col">
  	 			<h4>About Us</h4>
  	 			<ul>
  	 				<li><a href="#">Our Store</a></li>
  	 				<li><a href="#">About us</a></li>
  	 				<li><a href="#">Contact Us</a></li>
  	 				<li><a href="#">Team Member</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
                </div>
            </div>
        </footer>

    )
}

export default Footer