import Navbar from './../../Component/Navbar/Navbar'
import Footer from './../../Component/Footer/Footer'
import { useState } from 'react'
import './../Sports/Sports.css'
import img2 from './../../Component/Image/Images/ball.jpg'
import img11 from './../../Component/Image/Images/pads.jpg'
import img6 from './../../Component/Image/Images/shoes.jpg'

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
      <div className='sp'>
            
                      
            <h1 className='tt1'>Sports Equipment</h1>
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
  <img src={img2} className="cri" alt="pic"></img>
    
<h1 className='spga'>Football Ball</h1>
<span className='que'>Prize : ₹4,554 <del className='del'> M.R.P. : ₹7,956</del></span><p  className='sav'>Save upto 46%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>





             <div className='c1'>
              <img className='cri'src={"https://m.media-amazon.com/images/I/61xN7L1kK2L.AC_UL480_FMwebp_QL65.jpg"}/>
             <h1 className='spga'>Roller Skates</h1>
             <span className='que'>Prize : ₹1499 <del className='del'>  M.R.P. : ₹1799</del> </span> <p className='sav'>Save upto 54%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
<img className='cri'src={img11}/>
<h1 className='spga'>Floating Pads</h1>
<span className='que'>Prize : ₹2,560 <del className='del'> M.R.P. : ₹3,240</del></span><p  className='sav'>Save upto 33%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
  <img className='tri'src={"https://m.media-amazon.com/images/I/71r-jJbLMOL.AC_UL480_FMwebp_QL65.jpg"}/>
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
<img className='tri'src={'https://m.media-amazon.com/images/I/71x7TvdLvCL.AC_UL480_QL65.jpg'}/>
<h1 className='spga'>Chess</h1>
<span className='que'>Prize : ₹664<del className='del'> M.R.P. : ₹995</del></span><p  className='sav'>Save upto 33%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
  <img className='pri'src={"https://m.media-amazon.com/images/I/41JANhjSiWL.SY300_SX300_QL70_FMwebp.jpg"}/>
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
  <img className='pri'src={"https://m.media-amazon.com/images/I/81RspH7QkGL.AC_UL480_QL65.jpg"}/>
  <h1 className='spga'>Carrom Sticker</h1>
  <span className='que'>Prize : ₹379 <del className='del'> M.R.P. : ₹390</del> </span> <p  className='sav'>Save upto 3%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
  <img className='pri'src={"https://m.media-amazon.com/images/I/81bIV8oGu3L.AC_UL480_FMwebp_QL65.jpg"}/>
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
<img src={img6} className="pri" alt="pic"></img>
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
              <img className='pri'src={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNlCe-p3suMRFPrKoiUPDtMSTs8YyrL4Jb1tqFcaOg3MIeV-ttSHbuX4MSTCnV-o_6HPvpPdTuF1o6LfJPswffk5lPhRD6WxutMYFG4k8RkpKP4CSae6rGG3ffn05m7I6VjTHxwXE&usqp=CAc"}/>
              <h1 className='spga'>Sketting Helmet</h1>
            
          <span className='que'>Prize : ₹599 <del className='del'> M.R.P. : ₹899</del></span> <p  className='sav'>Save upto 45%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
          <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p> </div>
  
  
  </div>
  




















     </div>
     
        <Footer/>
        </>
    )
}
export default Hockey