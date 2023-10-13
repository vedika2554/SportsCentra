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



import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import Productcard from './../../Components/Productcard/Productcard'

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
               <img className='cri'src={imgcricket}/>
              <h1 className='spga'>Cricket</h1>
            </div>

            <div className='c1'>
               <img className='fot'src={imgFootball}/>
               <h1 className='spga'>Football</h1>
            </div>

             <div className='c1'>
               <img className='fot'src={imghockey}/>
               <h1 className='spga'>Hockey</h1>
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
               <img className='bas'src={imgsketing}/>
               <h1 className='spga'>Sketing</h1>
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
   <img className='bas'src={imgcycle}/>
   <h1 className='spga'>Cycling</h1>
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
               <img className='fot'src={imgcarrom}/>
              <h1 className='spga'>Carrom</h1>
            </div>

            <div className='c1'>
               <img className='fot'src={imgludo}/>
               <h1 className='spga'>Ludo</h1>
            </div>

             <div className='c1'>
               <img className='cri'src={imgbusiness}/>
               <h1 className='spga'>Bisness</h1>
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
  
  

            
            <Footer/>
        </div>
        </>
    )
}