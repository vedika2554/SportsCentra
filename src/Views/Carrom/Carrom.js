import Navbar from './../../Component/Navbar/Navbar'
import Footer from './../../Component/Footer/Footer'
import { useState } from 'react'
import './../Carrom/Carrom.css'




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
        <div className='btop'>
            
                      
       <h1 className='tt1'>Carrom Equipment</h1>
       <hr className='hre'/>
   <div className='container1'>

           <div className='c1'>
              <img className='ri'src={"https://m.media-amazon.com/images/I/31XLAbhKjjL._AC_UL480_FMwebp_QL65_.jpg"}/>
             <h1 className='spga'>Carrom Stand</h1>
             <span className='que'>Prize : ₹1,995 <del className='del'>  M.R.P. : ₹5,999</del> </span> <p className='sav'>Save upto 67%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
              <img className='tri'src={"https://m.media-amazon.com/images/I/61bMM9ZyGML._AC_UL480_FMwebp_QL65_.jpg"}/>
              <h1 className='spga'>Carrom coins</h1>
            
          <span className='que'>Prize : ₹930 <del className='del'> M.R.P. : ₹1,000</del></span> <p  className='sav'>Save upto 9%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
          <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p> </div>

            <div className='c1'>
              <img className='tri'src={"https://m.media-amazon.com/images/I/71ecKYXYZNS._AC_UL480_FMwebp_QL65_.jpg"}/>
              <h1 className='spga'>Carrom Board</h1>
              <span className='que'>Prize : ₹1,072 <del className='del'> M.R.P. : ₹1,299</del> </span> <p  className='sav'>Save upto 17%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
  <img className='tri'src={"https://m.media-amazon.com/images/I/71E8FH0YQGL._AC_UL480_FMwebp_QL65_.jpg"}/>
  <h1 className='spga'>Carrom cover</h1>
  <span className='que'>Prize : ₹899 <del className='del'> M.R.P. : ₹999</del> </span> <p  className='sav'>Save upto 10%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='tri'src={"https://m.media-amazon.com/images/I/51mIMnRvVbL._AC_UL480_FMwebp_QL65_.jpg"}/>
  <h1 className='spga'>Carrom powder</h1>
  <span className='que'>Prize : ₹249 <del className='del'> M.R.P. : ₹510</del> </span> <p  className='sav'>Save upto 51%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='tri'src={ "https://m.media-amazon.com/images/I/71TFd4CL--L._AC_UL480_FMwebp_QL65_.jpg"}/>
  <h1 className='spga'>Carrom kit</h1>
  <span className='que'>Prize : ₹1.699 <del className='del'> M.R.P. : ₹3,000</del> </span> <p  className='sav'>Save upto 43%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
  <img className='tri'src={"https://m.media-amazon.com/images/I/81RspH7QkGL._AC_UL480_QL65_.jpg"}/>
  <h1 className='spga'>Carrom Sticker</h1>
  <span className='que'>Prize : ₹379 <del className='del'> M.R.P. : ₹390</del> </span> <p  className='sav'>Save upto 3%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='tri'src={"https://m.media-amazon.com/images/I/51zI4LcENKL._AC_UL480_QL65_.jpg"}/>
  <h1 className='spga'>Carrom Board stand</h1>
  <span className='que'>Prize : ₹880 <del className='del'> M.R.P. : ₹1.999</del> </span> <p  className='sav'>Save upto 56%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='tri'src={ "https://m.media-amazon.com/images/I/41AnH+jB5uL._AC_UL480_QL65_.jpg"}/>
  <h1 className='spga'>Carrom combo</h1>
  <span className='que'>Prize : ₹599 <del className='del'> M.R.P. : ₹1,699 </del> </span> <p  className='sav'>Save upto 65%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
