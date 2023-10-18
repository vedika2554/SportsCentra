import Navbar from './../../Component/Navbar/Navbar'
import Footer from './../../Component/Footer/Footer'
import { useState } from 'react'
import './../Tennis/Tennis.css'





  function Hockey(){
    const [count, setcount] = useState(1);
    function inc(){
        if(count<10)
        setcount(count+1)
    }
    function dec(){
        if(count>1)
        setcount(count-1)
    }


  
    return(
        <>
        <Navbar/>
        <div className='bt'>
            
                      
       <h1 className='tt1'>Tennis Equipment</h1>
       <hr className='hre'/>
   <div className='container1'>

           <div className='c1'>
              <img className='tri'src={"https://www.shutterstock.com/image-vector/crossed-racket-tennis-ball-black-260nw-422361448.jpg"}/>
             <h1 className='spga'>Tennis Racket</h1>
             <span className='que'>Prize : ₹449 <del className='del'>  M.R.P. : ₹749</del> </span> <p className='sav'>Save upto 54%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
             <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div>
             <p><button className='tata'>Buy now</button></p>
           </div>

           <div className='c1'>
              <img className='tri'src={"https://tennex.in/cdn/shop/files/CentreCourtTennisBallYellow.png?v=1688065576&width=416"}/>
              <h1 className='spga'>Tennis Ball</h1>
            
          <span className='que'>Prize : ₹773 <del className='del'> M.R.P. : ₹1,042</del></span> <p  className='sav'>Save upto 45%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
          <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p> </div>

            <div className='c1'>
              <img className='tri'src={"https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/o/i/r/-original-imagqyxedye8emgj.jpeg?q=90"}/>
              <h1 className='spga'>Tennis Shoes</h1>
              <span className='que'>Prize : ₹3,854 <del className='del'> M.R.P. : ₹6,060</del> </span> <p  className='sav'>Save upto 54%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
              <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p>  </div> 
             </div>
             <div className='container1'>

<div className='c1'>
  <img className='tri'src={"https://jsbhealthcare.co.in/cdn/shop/files/Tennis-elbow-1100-X-1100-5-_5.jpg?v=1689862331"}/>
  <h1 className='spga'>Tennis Elbow Brace</h1>
  <span className='que'>Prize : ₹625 <del className='del'> M.R.P. : ₹699</del> </span> <p  className='sav'>Save upto 11%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='tri'src={"https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/554bda5a39a44a55a01aadc501242071_9366/melbourne-tennis-freelift-polo-shirt.jpg"}/>
  <h1 className='spga'>Tennis Clothes</h1>
  <span className='que'>Prize : ₹3,618 <del className='del'> M.R.P. : ₹5,689</del> </span> <p  className='sav'>Save upto 40%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='tri'src={ "https://m.media-amazon.com/images/I/61hCpCv57jL.jpg"}/>
  <h1 className='spga'>Tennis Bag</h1>
  <span className='que'>Prize : ₹872 <del className='del'> M.R.P. : ₹1,193</del> </span> <p  className='sav'>Save upto 31%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div> 
 
 </div>









 <div className='container1'>

<div className='c1'>
   <img className='tri'src={"https://m.media-amazon.com/images/I/61I3w2EjaML.jpg"}/>
  <h1 className='spga'>Tennis Knee Support</h1>
  <span className='que'>Prize : ₹716 <del className='del'> M.R.P. : ₹1,299</del></span> <p  className='sav'>Save upto 45%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>



























             <div className='c1'>
   <img className='tri'src={"https://dks.scene7.com/is/image/dkscdn/22WILULTRLGHTVSRWRCQ_White_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1"}/>
   <h1 className='spga'>Tennis hat</h1>
   <span className='que'>Prize : ₹850 <del className='del'> M.R.P. : ₹219</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>
































 <div className='c1'>
   <img className='tri'src={"https://assets.adidas.com/images/w_600,f_auto,q_auto/71e69ad76429444dadc3adc50113adcc_9366/Tennis_Headband_White_HD9126_01_standard.jpg"}/>
   <h1 className='spga'>Tennis Headband</h1>
   <span className='que'>Prize : ₹463<del className='del'> M.R.P. : ₹616</del> </span><p  className='sav'>Save upto 49%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div> 
  </div>
  <div className='container1'>

<div className='c1'>
<img className='tri'src={"https://contents.mediadecathlon.com/p1538378/c2068a4e2dd9dca23729f48d63d1d8a9/p1538378.jpg"}/>
<h1 className='spga'>Tennis Handband</h1>
<span className='que'>Prize : ₹554 <del className='del'> M.R.P. : ₹956</del></span><p  className='sav'>Save upto 46%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>



















             <div className='c1'>
   <img className='tri'src={"https://5.imimg.com/data5/QZ/NJ/IN/SELLER-5257771/tennis-ball-throwing-machine.jpeg"}/>
  <h1 className='spga'>Tennis Ball Machine</h1>
  <span className='que'>Prize : ₹7,108 <del className='del'> M.R.P. : ₹10,156</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
<img className='tri'src={ "https://m.media-amazon.com/images/I/41f99FAZBTL._AC_SR300,300.jpg"}/>
<h1 className='spga'>Tennis Hand Grip</h1>
<span className='que'>Prize : ₹1,741 <del className='del'> M.R.P. : ₹2,693</del></span><p  className='sav'>Save upto 39%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div> 

</div>



<div className='container1'>












             <div className='c1'>
   <img className='cri'src={"https://tennishub.in/media/mageplaza/blog/post/k/i/kitbag.jpg"}/>
   <h1 className='spga'>Tennis Kit Bag</h1>
   <span className='que'>Prize : ₹2,737<del className='del'> M.R.P. : ₹3,011</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>








             <div className='c1'>
<img className='fot'src={"https://img3.exportersindia.com/product_images/bc-full/2021/9/149598/lawn-tennis-net-1631956411-5998990.jpeg"}/>
<h1 className='spga'>Tennis Court Net</h1>
<span className='que'>Prize : ₹2,160 <del className='del'> M.R.P. : ₹3,240</del></span><p  className='sav'>Save upto 33%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>









             <div className='c1'>
   <img className='cri'src={"https://m.media-amazon.com/images/I/611j9guRGZS._AC_UL480_QL65_.jpg"}/>
   <h1 className='spga'>Tennis Trainer</h1>
   <span className='que'>Prize : ₹3,289<del className='del'> M.R.P. : ₹8,800 </del></span><p  className='sav'>Save upto 63%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>




</div>












        </div>
        <Footer/>
        
        </>
    )
 }
 export default Hockey
