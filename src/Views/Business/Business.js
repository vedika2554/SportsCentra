import Navbar from './../../Component/Navbar/Navbar'
import Footer from './../../Component/Footer/Footer'
import { useState } from 'react'





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
            
                      
       <h1 className='tt1'>Business Equipment</h1>
       <hr className='hre'/>
   <div className='container1'>

           <div className='c1'>
              <img className='pri'src={"https://rukminim2.flixcart.com/image/416/416/k1118cw0/board-game/z/z/c/fun-filled-business-game-with-money-notes-sanchi-creation-original-imafkz7wkuhpgffd.jpeg?q=70"}/>
             <h1 className='spga'>Business board</h1>
             <span className='que'>Prize : ₹241 <del className='del'>  M.R.P. : ₹499</del> </span> <p className='sav'>Save upto 51%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
              <img className='pri'src={"https://m.media-amazon.com/images/I/71p-jKWc6kL._SX522_.jpg"}/>
              <h1 className='spga'>Business card</h1>
            
          <span className='que'>Prize : ₹123 <del className='del'> M.R.P. : ₹130</del></span> <p  className='sav'>Save upto 5%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
          <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p> </div>

            <div className='c1'>
              <img className='pri'src={"https://m.media-amazon.com/images/I/814UsGbL7VL._AC_UL480_FMwebp_QL65_.jpg"}/>
              <h1 className='spga'>Business notes</h1>
              <span className='que'>Prize : ₹249 <del className='del'> M.R.P. : ₹300</del> </span> <p  className='sav'>Save upto 17%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
  <img className='cri'src={"https://m.media-amazon.com/images/I/71GKdwNJeKL._AC_UL480_FMwebp_QL65_.jpg"}/>
  <h1 className='spga'>Business coins</h1>
  <span className='que'>Prize : ₹239 <del className='del'> M.R.P. : ₹299</del> </span> <p  className='sav'>Save upto 20%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

             <div className='c1'>
  <img className='cri'src={"https://m.media-amazon.com/images/I/61IUvEZ-zQL._SX522_.jpg"}/>
  <h1 className='spga'>Business hotel pieces </h1>
  <span className='que'>Prize : ₹379 <del className='del'> M.R.P. : ₹390</del> </span> <p  className='sav'>Save upto 3%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='cri'src={"https://m.media-amazon.com/images/I/91kJuSOqRCL._SX522_.jpg"}/>
  <h1 className='spga'>Business kit</h1>
  <span className='que'>Prize : ₹400 <del className='del'> M.R.P. : ₹756</del> </span> <p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
  <img className='fot1'src={"https://m.media-amazon.com/images/I/71-eb7z0t-L._AC_UL480_QL65_.jpg"}/>
  <h1 className='spga'>Business combo</h1>
  <span className='que'>Prize : ₹385 <del className='del'> M.R.P. : ₹499 </del> </span> <p  className='sav'>Save upto 23%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div> 







             <div className='c1'>
  <img className='cri'src={"https://m.media-amazon.com/images/I/71r-jJbLMOL._AC_UL480_FMwebp_QL65_.jpg"}/>
  <h1 className='spga'>Dice</h1>
  <span className='que'>Prize : ₹179 <del className='del'> M.R.P. : ₹300</del> </span> <p  className='sav'>Save upto 40%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='cri'src={ "https://m.media-amazon.com/images/I/31hpmgA-v9L.jpg"}/>
  <h1 className='spga'>Business Tower</h1>
  <span className='que'>Prize : ₹150 <del className='del'> M.R.P. : ₹200</del> </span> <p  className='sav'>Save upto 20%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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