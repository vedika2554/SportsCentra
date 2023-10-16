import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

import './../Ourservices/Ourservices.css'
export default function Ourservices()
{

   <>
   

    return(
      <>
      <Navbar/>
 <div className='nopo'>
 <h1 className='tt1'>Need any service</h1>
            <hr className='hre'/>
<div className='container1'>

           <div className='c1'>
              <img className='fri'src={"https://cdn2.iconfinder.com/data/icons/top-search/128/_new_sign_label_shopping_splash_sticker_new_offer_new_product_shopping_offer-64.png"}/>
              <h1 className='mol'>Find new equipments</h1>
             <h2 className='ann'>Get the new equipment recently launched in our store. With great offers</h2>
          
           
           </div>
           <div className='c1'>
              <img className='fri'src={"https://cdn-icons-png.flaticon.com/128/7562/7562551.png"}/>
              <h1 className='mol'>Nearby store</h1>
             <h2 className='ann'>Visit our nearby store in your area and give us your feedback</h2>
          
           
           </div>
           <div className='c1'>
              <img className='fri'src={"https://cdn0.iconfinder.com/data/icons/mii-ui-vol-3/133/gallery-64.png"}/>
              <h1 className='mol'>Sports gallery</h1>
             <h2 className='ann'>Post your images of shopping and help us to learn and grow</h2>
          
           
           </div>
          </div>


          <div className='container1'>

  <div className='c1'>
  <Link to='/News'><img className='lri'src={"https://cdn-icons-png.flaticon.com/128/9335/9335852.png?ga=GA1.1.738810621.1697097674"}/></Link> 
              <h1 className='mol'><Link to='/News' className='ri1'>Sports news</Link></h1>
             <h2 className='ann'>Get the latest news , updates about sports and remain yourself updated</h2>
          
           
           </div>
           <div className='c1'>
           <Link to='/Sports'>  <img className='lri'src={"https://cdn-icons-png.flaticon.com/128/1540/1540505.png"}/></Link> 
              <h1 className='mol'><Link to='/Sports' className='ri1'>Sports equipment</Link></h1>
             <h2 className='ann'>Buy the different types of sports equipment and enjoy shopping</h2>
          
           
           </div>
           <div className='c1'>
              <img className='lri'src={"https://cdn3.iconfinder.com/data/icons/ecommerce-color-4/512/e_-_Commerce_-_Blue_gray_Fill_-_Copy-17-64.png"}/>
              <h1 className='mol'>Special offers</h1>
             <h2 className='ann'>Get excited offers and deals on sports equipment and save your money</h2>
          
           
           </div>
</div>


 
  
 </div>

        <Footer/>
        </>
    
}


