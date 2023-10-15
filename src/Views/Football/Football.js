import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import { useState } from 'react'
import "./Football.css"
import img1 from './../../Components/Image/images/net.jpg'
import img2 from './../../Components/Image/images/ball.jpg'
import img3 from './../../Components/Image/images/cloth.jpg'
import img4 from './../../Components/Image/images/helmet.jpg'
import img5 from './../../Components/Image/images/shin guard.jpg'
import img6 from './../../Components/Image/images/shoes.jpg'
import img7 from './../../Components/Image/images/helmet.jpg'
import img8 from './../../Components/Image/images/tool lit.jpg'
import img9  from './../../Components/Image/images/stress ball.jpg'
import img10 from './../../Components/Image/images/nets.jpg'
import img11 from './../../Components/Image/images/gloves.jpg'
import img12  from './../../Components/Image/images/rings.jpg'


function Football (){
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
            
                      
       <h1 className='tt1'>Hockey Equipment</h1>
       <hr className='hre'/>
   <div className='container1'>

           <div className='c1'>
              <img src={img1} className="tri" alt="pic"></img>
             <h1 className='spga'>Football Net</h1>
             <span className='que'>Prize : ₹348 <del className='del'>  M.R.P. : ₹749</del> </span> <p className='sav'>Save upto 64%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
           <img src={img2} className="tri" alt="pic"></img>
              <h1 className='spga'>Football Ball</h1>
            
          <span className='que'>Prize : ₹1,773 <del className='del'> M.R.P. : ₹3,042</del></span> <p  className='sav'>Save upto 35%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
          <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p> </div>

            <div className='c1'>
            <img src={img12} className="tri" alt="pic"></img>
              <h1 className='spga'>Cones</h1>
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
<img src={img6} className="tri" alt="pic"></img>
  <h1 className='spga'>Trendy Football Shoes</h1>
  <span className='que'>Prize : ₹623 <del className='del'> M.R.P. : ₹699</del> </span> <p  className='sav'>Save upto 11%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
<img src={img5} className="tri" alt="pic"></img>
  <h1 className='spga'>Football shooting pad</h1>
  <span className='que'>Prize : ₹3,618 <del className='del'> M.R.P. : ₹5,689</del> </span> <p  className='sav'>Save upto 40%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
<img src={img11} className="tri" alt="wec"></img>
  <h1 className='spga'>Protctive Wear</h1>
  <span className='que'>Prize : ₹872 <del className='del'> M.R.P. : ₹1,193</del> </span> <p  className='sav'>Save upto 45%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
<img src={img8} className="tri" alt="pic"></img>
  <h1 className='spga'>all Wear</h1>
  <span className='que'>Prize : ₹716 <del className='del'> M.R.P. : ₹1,299</del></span> <p  className='sav'>Save upto 50%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
<img src={img1} className="tri" alt="pic"></img>
   
   
   <h1 className='spga'>Football Net</h1>
   <span className='que'>Prize : ₹27,37<del className='del'> M.R.P. : ₹3,011</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

 <div className='c1'>
<img src={img9} className="tri" alt="pic"></img>
   
   <h1 className='spga'>Sets f Ball</h1>
   <span className='que'>Prize : ₹3763<del className='del'> M.R.P. : ₹3,616</del> </span><p  className='sav'>Save upto 49%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
  <img src={img2} className="tri" alt="pic"></img>
    
<h1 className='spga'>Footbaall Ball</h1>
<span className='que'>Prize : ₹4,554 <del className='del'> M.R.P. : ₹7,956</del></span><p  className='sav'>Save upto 46%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
<img src={img11} className="tri" alt="pic"></img>

<h1 className='spga'>Football head gear</h1>
<span className='que'>Prize : ₹2,160 <del className='del'> M.R.P. : ₹3,240</del></span><p  className='sav'>Save upto 33%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
<img src={img12} className="tri" alt="pic"></img>

<h1 className='spga'>Hockey Cones</h1>
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
  <img src={img9} className="tri" alt="pic"></img>
   
  <h1 className='spga'>Hockey Net</h1>
  <span className='que'>Prize : ₹7,108 <del className='del'> M.R.P. : ₹10,156</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img src={img5} className="tri" alt="pic"></img>
   
   <h1 className='spga'>Hockey Stick blade</h1>
   <span className='que'>Prize : ₹14,850 <del className='del'> M.R.P. : ₹21,219</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

 <div className='c1'>
  <img src={img3} className="tri" alt="pic"></img>
   
   <h1 className='spga'>Hockey Set</h1>
   <span className='que'>Prize : ₹13,489 <del className='del'> M.R.P. : ₹21,582</del> </span><p  className='sav'>Save upto 37%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div> 
  </div>














        </div>
        <Footer/>
        
        </>
    )
 }

export default Football