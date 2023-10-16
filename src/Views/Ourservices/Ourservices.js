import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

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
           <img className='rcri'src={'https://cdn2.iconfinder.com/data/icons/top-search/128/_new_sign_label_shopping_splash_sticker_new_offer_new_product_shopping_offer-64.png'}/>
              <h1 className='mol'>Find new equipments</h1>
              <p className='ou-se'>Get the new equipment recently launched in our store. With great offers </p>
            </div>

            <div className='car1'>
               <img className='rcri'src={"https://cdn-icons-png.flaticon.com/128/7562/7562551.png"}/>
               <h1 className='mol'>Nearby store</h1>
               <p className='ou-se'>Visit our nearby store in your area and give us your feedback</p>
            </div>

             <div className='car1'>
              <img className='rcri'src={"https://cdn0.iconfinder.com/data/icons/mii-ui-vol-3/133/gallery-64.png"}/> 
               <h1 className='mol'>Sports gallery</h1>
               <p className='ou-se'>Post your images of shopping and help us to learn and grow</p>
            </div> 
              </div>
              <div className='container1'>

<div className='car2'>
<Link to='/News'><img className='rcri'src={'https://cdn-icons-png.flaticon.com/128/9335/9335852.png?ga=GA1.1.738810621.1697097674'}/></Link>
<h1 className='mol'><Link to='/News' className='r1'>Sports news</Link></h1>
    <p className='ou-se'>Get the latest news , updates  about sports and remain yourself updated</p>
</div>

<div className='car2'>
   <Link to='/Sports'><img className='rcri'src={"https://cdn-icons-png.flaticon.com/128/1540/1540505.png"}/></Link>
   <h1 className='mol'><Link to='/Sports' className='r1'>Sports equipment</Link></h1>
   <p className='ou-se'>Buy the different types of sports equipment and enjoy shopping</p>
</div>

 <div className='car2'>
   <img className='rcri'src={"https://cdn3.iconfinder.com/data/icons/ecommerce-color-4/512/e_-_Commerce_-_Blue_gray_Fill_-_Copy-17-64.png" }/>
   <h1 className='mol'>Special offers</h1>
   <p className='ou-se'>Get excited offers and deals on sports equipment and save your money</p>
</div> 
  </div>
  
 </div>
        <Footer/>
        </>
    )
}