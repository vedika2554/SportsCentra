import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import './../Sports/Sports.css'



import imgcricket from './../../Components/Image/cricket.jpg'
import imgFootball from './../../Components/Image/football.jpg'
import imghockey from './../../Components/Image/hockey.jpg'
import imgvollyball from './../../Components/Image/vollyball.jpg'
import imgbaseball from './../../Components/Image/baseball.jpeg'
import imgbasketball from './../../Components/Image/basketball.jpg'
export default function Sports()
{
    return(
      <>
      <Navbar/>
        <div className='sp'>
          
       <h1 className='tt1'>Team Sports</h1>
           
            <div className='container1'>

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
              <div className='container1'>

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




   
  <h1 className='tt1'>Team Sports</h1>
           
           <div className='container1'>

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
             <div className='container1'>

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
        </div>
        <Footer/>
        </>
    )
}