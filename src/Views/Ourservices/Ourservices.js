import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import imgfind from './../../Components/Image/find.png'
import './../Ourservices/Ourservices.css'
export default function Ourservices()
{
    return(
      <>
      <Navbar/>
 <div className='nopo'>

 <h1 className='tt2'>Our Services</h1>
            <hr className='hre'/>
            <div className='container1'>

            <div className='car1'>
           <img className='rcri'src={imgfind}/>
              <h1 className='mol'>Find new equipments</h1>
              <p className='ou-se'>Get the new equipment recently launched in our store. With great offers </p>
            </div>

            <div className='car1'>
               <img className='rcri'src={"https://cdn-icons-png.flaticon.com/128/7562/7562551.png"}/>
               <h1 className='mol'>Nearby store</h1>
               <p className='ou-se'>Visit our nearby store in your area and give us your feedback</p>
            </div>

             <div className='car1'>
              <img className='rcri'src={"https://cdn-icons-png.flaticon.com/128/10256/10256921.png"}/> 
               <h1 className='mol'>Sports gallery</h1>
               <p className='ou-se'>Post your images of shopping and help us to learn and grow</p>
            </div> 
              </div>
              <div className='container1'>

<div className='car2'>
<img className='rcri'src={"https://cdn-icons-png.flaticon.com/128/8848/8848976.png"}/>
    <h1 className='mol'>Sports news</h1>
    <p className='ou-se'>Get the latest news , updates  about sports and remain yourself updated</p>
</div>

<div className='car2'>
   <Link to='/Sports'><img className='rcri'src={"https://cdn-icons-png.flaticon.com/128/1025/1025787.png"}/></Link>
   <h1 className='mol'><Link to='/Sports' className='r1'>Sports equipment</Link></h1>
   <p className='ou-se'>Buy the different types of sports equipment and enjoy shopping</p>
</div>

 <div className='car2'>
   <img className='rcri'src={"https://cdn-icons-png.flaticon.com/128/10737/10737527.png" }/>
   <h1 className='mol'>Special offers</h1>
   <p className='ou-se'>Get excited offers and deals on sports equipment and save your money</p>
</div> 
  </div>
  
 </div>
        <Footer/>
        </>
    )
}