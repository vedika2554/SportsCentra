import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import { useState } from 'react'
import './../Cricket/Cricket.css'




  function Cricket(){
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
        <div className='rbt'>
            
                      
       <h1 className='tt1'>Cricket Equipment</h1>
       <hr className='hre'/>
   <div className='container1'>

           <div className='c1'>
              <img className='tri'src={"https://m.media-amazon.com/images/I/41PIX9oJnBL._SX300_SY300_QL70_FMwebp_.jpg"}/>
             <h1 className='spga'>Cricket Bat</h1>
             <span className='que'>Prize : ₹1,999 <del className='del'>  M.R.P. : ₹3,999</del> </span> <p className='sav'>Save upto 50%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
              <img className='tri'src={"https://m.media-amazon.com/images/I/419Lgy2tszL._SX300_SY300_QL70_FMwebp_.jpg"}/>
              <h1 className='spga'>Cricket balls</h1>
            
          <span className='que'>Prize : ₹630 <del className='del'> M.R.P. : ₹900</del></span> <p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
          <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p> </div>


             <div className='c1'>
  <img className='tri'src={"https://m.media-amazon.com/images/I/61PevyevsJL._AC_UL480_FMwebp_QL65_.jpg"}/>
  <h1 className='spga'>Cricket helmet</h1>
  <span className='que'>Prize : ₹1,322 <del className='del'> M.R.P. : ₹1,499</del> </span> <p  className='sav'>Save upto 9%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
              <img className='pri'src={"https://m.media-amazon.com/images/I/71YYDwkgK3L._SY450_.jpg"}/>
              <h1 className='spga'>Cricket stumps</h1>
              <span className='que'>Prize : ₹449 <del className='del'> M.R.P. : ₹999</del> </span> <p  className='sav'>Save upto 55%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
              <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p>  </div> 
             











<div className='c1'>
  <img className='pri'src={"https://m.media-amazon.com/images/I/81bIV8oGu3L._AC_UL480_FMwebp_QL65_.jpg"}/>
  <h1 className='spga'>Cricket gloves</h1>
  <span className='que'>Prize : ₹955 <del className='del'> M.R.P. : ₹1,399</del> </span> <p  className='sav'>Save upto 32%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='pri'src={"https://m.media-amazon.com/images/I/51nHQqvWnEL._AC_UL480_FMwebp_QL65_.jpg"}/>
  <h1 className='spga'>Batting pad</h1>
  <span className='que'>Prize : ₹1,699 <del className='del'> M.R.P. : ₹2,999</del> </span> <p  className='sav'>Save upto 31%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
   <img className='fot'src={"https://m.media-amazon.com/images/I/71gzaf11wxL._AC_UL480_FMwebp_QL65_.jpg"}/>
  <h1 className='spga'>Cricket Shoes</h1>
  <span className='que'>Prize : ₹1,679 <del className='del'> M.R.P. : ₹2,099</del></span> <p  className='sav'>Save upto 20%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

             <div className='c1'>
   <img className='fot1'src={"https://m.media-amazon.com/images/I/51B+p6IhC0L._AC_UL480_FMwebp_QL65_.jpg"}/>
   <h1 className='spga'>Cricket tee</h1>
   <span className='que'>Prize : ₹3,25 <del className='del'> M.R.P. : ₹449</del> </span><p  className='sav'>Save upto 28%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div> 






 <div className='c1'>
   <img className='cri'src={"https://m.media-amazon.com/images/I/51kmeyUMMML._AC_UL480_FMwebp_QL65_.jpg"}/>
   <h1 className='spga'>Cricket cap</h1>
   <span className='que'>Prize : ₹299<del className='del'> M.R.P. : ₹1,499</del> </span><p  className='sav'>Save upto 80%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
<img className='cri'src={"https://m.media-amazon.com/images/I/61DvUlynkwL._AC_UL480_FMwebp_QL65_.jpg"}/>
<h1 className='spga'>Cricket thigh pad</h1>
<span className='que'>Prize : ₹749 <del className='del'> M.R.P. : ₹799 </del></span><p  className='sav'>Save upto 6%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
<img className='fot1'src={"https://m.media-amazon.com/images/I/81y1ZExqFKL._AC_UL480_FMwebp_QL65_.jpg"}/>
<h1 className='spga'>Cricket pratice net</h1>
<span className='que'>Prize : ₹399 <del className='del'> M.R.P. : ₹4,000</del></span><p  className='sav'>Save upto 90%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
<img className='fot'src={"https://m.media-amazon.com/images/I/710pNImAtXS._AC_UL480_QL65_.jpg"}/>
<h1 className='spga'>Cricket kit</h1>
<span className='que'>Prize : ₹8,299 <del className='del'> M.R.P. : ₹9,999</del></span><p  className='sav'>Save upto 17%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
   <img className='tri'src={"https://m.media-amazon.com/images/I/61Bg02EIC9L._AC_UL480_FMwebp_QL65_.jpg"}/>
  <h1 className='spga'>Cricket bail</h1>
  <span className='que'>Prize : ₹150<del className='del'> M.R.P. : ₹210</del></span><p  className='sav'>Save upto 29%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
   <img className='tri'src={"https://m.media-amazon.com/images/I/51ivChZqX4L._AC_UL480_FMwebp_QL65_.jpg"}/>
   <h1 className='spga'>Cricket mouth guard</h1>
   <span className='que'>Prize : ₹249 <del className='del'> M.R.P. : ₹400</del></span><p  className='sav'>Save upto 38%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>
             <div className='c1'>
   <img className='tri'src={"https://m.media-amazon.com/images/I/817NWNZKiEL._AC_UL480_FMwebp_QL65_.jpg"}/>
   <h1 className='spga'>Cricket bag</h1>
   <span className='que'>Prize : ₹1,145<del className='del'> M.R.P. : ₹1,999</del></span><p  className='sav'>Save upto 43%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
 export default Cricket


