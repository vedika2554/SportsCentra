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
<div className='container1'>

           <div className='c1'>
              <img className='fri'src={vedika}/>
              <h1 className='mol'>Vedika </h1>
             <h2 className='ann'>Fullstack Developer</h2>
          
           
           </div>
           <div className='c1'>
              <img className='fri'src={piyush}/>
              <h1 className='mol'>Piyush</h1>
             <h2 className='ann'>Fullstack Developer</h2>
          
           
           </div>
           <div className='c1'>
              <img className='fri'src={bhairavi}/>
              <h1 className='mol'>Bhairavi</h1>
             <h2 className='ann'>Fullstack Developer</h2>
          </div>
           
        
           
           </div>

           <div className='container1'>
           
           <div className='c1'>
              <img className='fri'src={kashish}/>
              <h1 className='mol'>Kashish</h1>
             <h2 className='ann'>Fullstack Developer</h2>
          
           
           </div>
           <div className='c1'>
           <img className='fri'src={anuj}/>
<h1 className='mol'>Himanshu</h1>
             <h2 className='ann'>Fullstack Developer</h2>
           </div>
          </div>









     
          </div>
          <Footer/>
          </>
    )
}