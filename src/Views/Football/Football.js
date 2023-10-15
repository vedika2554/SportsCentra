
import "./Football.css"
import img1 from './../../Components/Image/images/net.jpg'
import img2 from './../../Components/Image/images/ball.jpg'
import img3 from './../../Components/Image/images/cloth.jpg'
import img4 from './../../Components/Image/images/helmet.jpg'
import img5 from './../../Components/Image/images/shin guard.jpg'
import img6 from './../../Components/Image/images/shoes.jpg'


function Football (){
    return (
<div section className="section-white">
<div className="colon">
        <div className="row">
<div className="col-md-12 text-center">
  <h2 className="section-title"></h2>
   <h1> The Football Club</h1>

   </div>
<div className="col-sm-6 col-md-4">
    <div className="team-item">
        <img src={img1} className="team-img "alt="pic"></img>
        <h3> Football Trace</h3>
        <div className="team-info">
       <div  className="twitter"> &#9734; &#9734; &#9734;</div>
   <p>Best Deal Available For This Week.</p>
     <div className="team-icon"> Upto 40% OFF </div>
     <del className="facebook">Rupees 1599</del>
     <div className="dribble"> Prize 1000 Only/-</div>
     <button className="pinterest"> Buy Now </button>

     </div>   
    </div>
</div>
<div className="col-sm-6 col-md-4">
    <div className="team-item">
        <img src={img2} className="team-img "alt="pic"></img>
        <h3>Soccer Net</h3>
        <div className="team-info">
        <div className="twitter">&#9734; &#9734; &#9734; </div>
        <p>Best Deal Available For This Week.</p>
     <div className="team-icon"> Upto 40% OFF </div>
     <del className="facebook">Rupees 1599</del>
     <div className="dribble"> Prize 1000 Only/-</div>
     <button className="pinterest"> Buy Now </button>



        
     
    </div>
    </div>
</div>
<div className="col-sm-6 col-md-4">
    <div className="team-item">
        <img src={img3} className="team-img "alt="pic"></img>
        <h3> Cones</h3>
        <div className="team-info">
       <div className="twitter" >&#9734; &#9734; &#9734; </div>
        <p>Best Deal Available For This Week.</p>
     <div className="team-icon"> Upto 40% OFF </div>
     <del className="facebook">Rupees 1599</del>
     <div className="dribble"> Prize 1000 Only/-</div>
     <button className="pinterest"> Buy Now </button>
     
    </div>
    </div>
</div>

<div className="col-sm-6 col-md-4">
    <div className="team-item">
        <img src={img4} className="team-img "alt="pic"></img>
        <h3> Sports Bag</h3>
        <div className="team-info">
        
       <div className="twitter" >&#9734; &#9734; &#9734; </div>
        <p>Best Deal Available For This Week.</p>
     <div className="team-icon"> Upto 40% OFF </div>
     <del className="facebook">Rupees 1599</del>
     <div className="dribble"> Prize 1000 Only/-</div>
     <button className="pinterest"> Buy Now </button>
     
    </div>
    </div>
</div>

<div className="col-sm-6 col-md-4">
    <div className="team-item">
        <img src={img5} className="team-img "alt="pic"></img>
        <h3> Football Goal</h3>
        <div className="team-info">
        

        
       <div className="twitter" >&#9734; &#9734; &#9734; </div>
        <p>Best Deal Available For This Week.</p>
     <div className="team-icon"> Upto 40% OFF </div>
     <del className="facebook">Rupees 1599</del>
     <div className="dribble"> Prize 1000 Only/-</div>
     <button className="pinterest"> Buy Now </button>
    </div>
    </div>
</div>


<div className="col-sm-6 col-md-4">
    <div className="team-item">
        <img src={img6}className="team-img "alt="pic"></img>
        <h3> FOOTBALL</h3>
        <div className="team-info">
        
        
       <div className="twitter" >&#9734; &#9734; &#9734; </div>
        <p>Best Deal Available For This Week .</p>
     <div className="team-icon"> Upto 40% OFF </div>
     <del className="facebook">Rupees 1599</del>
     <div className="dribble"> Prize 1000 Only/-</div>
     <button className="pinterest"> Buy Now </button>
    </div>
    </div>
</div>
    </div>
    </div>
    </div>


    )
}
export default Football