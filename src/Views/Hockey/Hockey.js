import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import { useState } from 'react'
import './../Hockey/hocky.css'




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
            
                      
       <h1 className='tt1'>Hockey Equipment</h1>
       <hr className='hre'/>
   <div className='container1'>

           <div className='c1'>
              <img className='tri'src={"https://m.media-amazon.com/images/I/51bb9dwdgAL._SX522_.jpg"}/>
             <h1 className='spga'>Hockey Stick</h1>
             <span className='que'>Prize : ₹348 <del className='del'>  M.R.P. : ₹749</del> </span> <p className='sav'>Save upto 54%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
              <img className='tri'src={"https://m.media-amazon.com/images/I/61sdgTD7k1L._SX522_.jpg"}/>
              <h1 className='spga'>Hockey Gloves</h1>
            
          <span className='que'>Prize : ₹1,773 <del className='del'> M.R.P. : ₹3,042</del></span> <p  className='sav'>Save upto 45%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
          <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p> </div>

            <div className='c1'>
              <img className='tri'src={"https://m.media-amazon.com/images/I/71GF1yCom+L._SX522_.jpg"}/>
              <h1 className='spga'>Hockey Sketes</h1>
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
  <img className='tri'src={"https://m.media-amazon.com/images/I/41JANhjSiWL._SY300_SX300_QL70_FMwebp_.jpg"}/>
  <h1 className='spga'>Hockey Balls</h1>
  <span className='que'>Prize : ₹625 <del className='del'> M.R.P. : ₹699</del> </span> <p  className='sav'>Save upto 11%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='tri'src={"https://m.media-amazon.com/images/I/61cYFA99tOL._SX679_.jpg"}/>
  <h1 className='spga'>Hockey shooting pad</h1>
  <span className='que'>Prize : ₹3,618 <del className='del'> M.R.P. : ₹5,689</del> </span> <p  className='sav'>Save upto 40%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='tri'src={ "https://m.media-amazon.com/images/I/81J3396nE8L._AC_UL480_FMwebp_QL65_.jpg"}/>
  <h1 className='spga'>Hockey Bag</h1>
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
   <img className='tri'src={"https://m.media-amazon.com/images/I/61nVDoij9fL._SX679_.jpg"}/>
  <h1 className='spga'>Hockey Knee Shoes</h1>
  <span className='que'>Prize : ₹716 <del className='del'> M.R.P. : ₹1,299</del></span> <p  className='sav'>Save upto 45%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
   <img className='tri'src={"https://m.media-amazon.com/images/I/61UJ3XSQtyL._UX569_.jpg"}/>
   <h1 className='spga'>Hockey pants</h1>
   <span className='que'>Prize : ₹27,37<del className='del'> M.R.P. : ₹3,011</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

 <div className='c1'>
   <img className='tri'src={"https://m.media-amazon.com/images/I/61VnEzQBDlL._SX679_.jpg"}/>
   <h1 className='spga'>Hockey Set</h1>
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
<img className='cri'src={"https://m.media-amazon.com/images/I/61cFNKGe9TL._SX679_.jpg"}/>
<h1 className='spga'>Hockey Sholder pad</h1>
<span className='que'>Prize : ₹4,554 <del className='del'> M.R.P. : ₹7,956</del></span><p  className='sav'>Save upto 46%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
<img className='fot'src={"https://m.media-amazon.com/images/I/31haQsj26tL._SY300_SX300_QL70_FMwebp_.jpg"}/>
<h1 className='spga'>Hockey head gear</h1>
<span className='que'>Prize : ₹2,160 <del className='del'> M.R.P. : ₹3,240</del></span><p  className='sav'>Save upto 33%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
<img className='fot'src={ "https://m.media-amazon.com/images/I/612VDkue17L._AC_UL480_FMwebp_QL65_.jpg"}/>
<h1 className='spga'>Hockey shoes</h1>
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
   <img className='tri'src={"https://m.media-amazon.com/images/I/81ITl77Lu6L._SX522_.jpg"}/>
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
   <img className='tri'src={"https://m.media-amazon.com/images/I/61M4ip8U+kL._AC_UL480_FMwebp_QL65_.jpg"}/>
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
   <img className='tri'src={"https://m.media-amazon.com/images/I/919KNiMjecL._SX679_.jpg"}/>
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
 export default Hockey


