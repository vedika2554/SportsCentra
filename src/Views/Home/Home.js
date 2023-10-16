import './Home.css'
import imgcricket from './../../Components/Image/cricket.jpg'
import imgFootball from './../../Components/Image/football.jpg'
import imghockey from './../../Components/Image/hockey.jpg'
import imgvollyball from './../../Components/Image/vollyball.jpg'
import imgbaseball from './../../Components/Image/baseball.jpeg'
import imgbasketball from './../../Components/Image/basketball.jpg'
import imgbadminton from './../../Components/Image/badminton.jpg'
import imgsketing from './../../Components/Image/sketing.jpg'
import imgtennis from './../../Components/Image/tennis.jpg'
import imgswim from './../../Components/Image/swimming.jpg'
import imgcycle from './../../Components/Image/cycle.jpeg'
import imgboxing from './../../Components/Image/boxing.jpg'
import imgcarrom from './../../Components/Image/carrom.jpg'
import imgludo from './../../Components/Image/ludo.jpg'
import imgbusiness from './../../Components/Image/bisness.jpg'
import imgchess from './../../Components/Image/chess.jpeg'
import imgsneck from './../../Components/Image/sneck.jpg'
import imgcheck from './../../Components/Image/checkers.jpg'
import imgshop from './../../Components/Image/shopping-cart.png'
import imgdelivery from './../../Components/Image/free-delivery.png'
import imgchoice from './../../Components/Image/choice.png'
import imgreturn from './../../Components/Image/return (1).png'
import imghour from './../../Components/Image/hours.png'
import imgpay from './../../Components/Image/payment.png'



import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import Productcard from './../../Components/Productcard/Productcard'
import { Link } from 'react-router-dom'

export default function Home()
{
    return(
        <>
        <Navbar/>
        <div className='home'>
            <Productcard/>

            
            <h1 className='t1'>Team Sports</h1>
            <hr className='h1'/>
            <div className='container'>

            <div className='c1'>
             <Link to='/Cricket'><img className='cri'src={imgcricket}/></Link> 
              <h1 className='spga'><Link to='/Cricket'className='r1'>Cricket</Link></h1>
            </div>

            <div className='c1'>
               <img className='fot'src={imgFootball}/>
               <h1 className='spga'>Football</h1>
            </div>

             <div className='c1'>
              <Link to='/hockey'><img className='fot'src={imghockey}/></Link> 
               <h1 className='spga'><Link to='/hockey' className='r1'>Hockey</Link></h1>
            </div> 
              </div>
              <div className='container'>

<div className='c1'>
<img className='fot'src={imgvollyball}/>
    <h1 className='spga'>Vollyball</h1>
</div>

<div className='c1'>
   <img className='fot'src={imgbaseball}/>
   <h1 className='spga'>Baseball</h1>
</div>

 <div className='c1'>
   <img className='bas'src={imgbasketball }/>
   <h1 className='spga'>Basketball</h1>
</div> 
  </div>








  <h1 className='t1'>Outdoor Sports</h1>
            <hr className='h1'/>
            <div className='container'>

            <div className='c1'>
               <img className='fot'src={imgbadminton }/>
              <h1 className='spga'>Badminton</h1>
            </div>

            <div className='c1'>
            <Link to='/Sketing'> <img className='fot1'src={imgsketing}/></Link>
               <h1 className='spga'><Link to='/Sketing'className='r1'>Sketing</Link></h1>
            </div>

             <div className='c1'>
               <img className='fot'src={imgtennis}/>
               <h1 className='spga'>Tennis</h1>
            </div> 
              </div>
              <div className='container'>

<div className='c1'>
   <img className='fot'src={imgswim}/>
   <h1 className='spga'>Swimming</h1>
</div>

<div className='c1'>
<Link to='/Cycling'> <img className='fot1'src={imgcycle}/></Link>
   <h1 className='spga'><Link to='/Sketing'className='r1'>Cycling</Link></h1>
</div>

 <div className='c1'>
   <img className='cri'src={imgboxing}/>
   <h1 className='spga'>Boxing</h1>
</div> 
  </div>










  <h1 className='t1'>Indoor Sports</h1>
            <hr className='h1'/>
            <div className='container'>

            <div className='c1'>
            <Link to='/Carrom'>   <img className='fot'src={imgcarrom}/></Link>
              <h1 className='spga'><Link to='Carrom' className='r1'>Carrom</Link></h1>
            </div>

            <div className='c1'>
               <img className='fot'src={imgludo}/>
               <h1 className='spga'>Ludo</h1>
            </div>

             <div className='c1'>
             <Link to='/Business'><img className='cri'src={imgbusiness}/></Link>
              <h1 className='spga'> <Link to='/Business' className='r1'>Bisness</Link></h1>
            </div> 
              </div>
              <div className='container'>

<div className='c1'>
   <img className='cri'src={imgchess}/>
   <h1 className='spga'>Chess</h1>
</div>

<div className='c1'>
   <img className='bas'src={imgsneck}/>
   <h1 className='spga'>Snecks and ladder</h1>
</div>

 <div className='c1'>
   <img className='bas'src={imgcheck}/>
   <h1 className='spga'>Checkers</h1>
</div> 
  </div>












  
  

  <h1 className='t5'>Our motive</h1>


<h3 className='t4'>
Vitality and Responsibility are two values that Sportcentra has been founded on and these are shared by more than 4500 teammates across India and 80,000 teammates worldwide. Daring to make the change is what guides everything we do.
Inspired by our values, we are committed to being a responsible and active
player in the economic and social development of underserved communities wherever we are present. Teammates are at the heart of our Project and thereby a large part of our social programmes are driven and facilitated by them, with a passion to ensure we create a strong positive impact both socially and environmentally through the activities undertaken. These factors set the base and backdrop of our website
</h3>

<h1 className='t5'>Our objective</h1>
<h3><p className='t4'>• Our priority is to create value in the long term for our local community.</p>
<p className='t4'> • We would like to make a difference in the community we are present in by influencing the development and social behaviour change by enabling employability and encouraging social integration through sports.</p></h3>


<h1 className='t5'>Our Mission</h1>

<h3><p  className='t4'>• Promoting good health and well-being of children from low-income families by engaging them in the sports program and by facilitating a sporty environment</p>
<p  className='t4'>• Developing employability skills of vulnerable youths</p>
<p className='t4'>• Engaging in disaster relief work</p></h3>

  <h1 className='t2'>Our Features</h1>
  <hr/>

  <div className='container'>

<div className='c3'>
   <img className='fea'src={imgshop}/>
   <h1 className='spga'>Easy Shopping</h1>
</div>

<div className='c3'>
   <img className='fea'src={imgdelivery}/>
   <h1 className='spga'>Fast and safe delivary</h1>
</div>

 <div className='c3'>
   <img className='fea'src={imgchoice}/>
   <h1 className='spga'>Right Choice</h1>
</div> 
  </div>
  <div className='container'>

  <div className='c3'>
   <img className='fea'src={imgreturn}/>
   <h1 className='spga'>Easy Return</h1>
</div> 

<div className='c3'>
   <img className='fea'src={imghour}/>
   <h1 className='spga'>24 Hours support</h1>
</div> 

<div className='c3'>
   <img className='feo'src={imgpay}/>
   <h1 className='spga'>Secure payment</h1>
</div> 
</div>











  <h1 className='t2'>Customer Reviews</h1>
            <hr className='h1'/>
            <div className='container'>

            <div className='c2'>
              
              <h1 className='pga'>"It was really nice talking to Ria - She really figured out my query & Now I am going with her suggestions. Thank you Ria once again."
- BABAN</h1>
            </div>

            <div className='c2'>
      
               <h1 className='pga'>Support agent Hritika is super supportive, polite, simple and straightforward with customer queries. Most helpful agent ever to chat with. Thank You
Hritika :)"
- POUSALI</h1>
            </div>

             <div className='c2'>
               <h1 className='pga'>"It was crisp and prompt help. Glad to chat with a customer relationship officer like Ms. Varsha. Regards"
- KAMAL</h1>
            </div> 
              </div>
              <div className='container'>

<div className='c2'>
 
   <h1 className='pga'>"Kshitij helped me with all the options and was really very concerned throughout. He deserves a thumbs up."
- AKASHDEEP</h1>
</div>

<div className='c2'>
   <h1 className='pga'>"This man just literally solved my problem in a few seconds, Thank you so much Sumeet."
- MUKESH</h1>
</div>

 <div className='c2'>
   
   <h1 className='pga'>"Got the correct man and advice... Completely satisfied with Ayan and am going to order one ...'
- AMAN</h1>
</div> 
  </div>
  
  


  








  <h1 className='t3'>Subscribe to the Sports Shop For Latest upload</h1>
  <div>
   <input className='input'type='email' placeholder='Enter your email id'/>
   <button className='sub'>Subscribe</button>
  </div>
  </div> 






  <Footer/>
        
        </>
    )
}