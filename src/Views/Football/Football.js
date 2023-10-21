import Navbar from './../../Component/Navbar/Navbar'
import Footer from './../../Component/Footer/Footer'
import { useState } from 'react'
import "./Football.css"
import { Link } from 'react-router-dom'
import img2 from './../../Component/Image/Images/ball.jpg'
import img3 from './../../Component/Image/Images/cloth.jpg'
import img5 from './../../Component/Image/Images/shin guard.jpg'
import img6 from './../../Component/Image/Images/shoes.jpg'
import img7 from './../../Component/Image/Images/helmet.jpg'
import img8 from './../../Component/Image/Images/tool lit.jpg'
import img10 from './../../Component/Image/Images/nets.jpg'
import img11 from './../../Component/Image/Images/gloves.jpg'
import img12  from './../../Component/Image/Images/rings.jpg'


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
            
                      
       <h1 className='tt1'>Football Equipment</h1>
       <hr className='hre'/>
   <div className='container1'>

           <div className='c1'>
              <img src={'https://m.media-amazon.com/images/I/81E971ePquL._AC_UL480_FMwebp_QL65_.jpg'} className="cri" alt="pic"></img>
             <h1 className='spga'>Football keeper gloves</h1>
             <span className='que'>Prize : ₹348 <del className='del'>  M.R.P. : ₹749</del> </span> <p className='sav'>Save upto 64%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
             <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>

           <div className='c1'>
           <img src={img2} className="cri" alt="pic"></img>
              <h1 className='spga'>Football Ball</h1>
            
          <span className='que'>Prize : ₹1,773 <del className='del'> M.R.P. : ₹3,042</del></span> <p  className='sav'>Save upto 35%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
          <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>

            <div className='c1'>
            <img src={img12} className="cri" alt="pic"></img>
              <h1 className='spga'>Cones</h1>
              <span className='que'>Prize : ₹3,854 <del className='del'> M.R.P. : ₹6,060</del> </span> <p  className='sav'>Save upto 54%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
              <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>
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
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>

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
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>

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
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>
 
 </div>









 <div className='container1'>

<div className='c1'>
<img src={img8} className="fot" alt="pic"></img>
  <h1 className='spga'>all Wear</h1>
  <span className='que'>Prize : ₹716 <del className='del'> M.R.P. : ₹1,299</del></span> <p  className='sav'>Save upto 50%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>

<div className='c1'>
<img src={img10} className="fot1" alt="pic"></img>
   
   
   <h1 className='spga'>Football Net</h1>
   <span className='que'>Prize : ₹27,37<del className='del'> M.R.P. : ₹3,011</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>
 <div className='c1'>
<img src={img7} className="fot" alt="pic"></img>
   
   <h1 className='spga'>Football helmet</h1>
   <span className='que'>Prize : ₹3763<del className='del'> M.R.P. : ₹3,616</del> </span><p  className='sav'>Save upto 49%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>
  </div>
  <div className='container1'>

<div className='c1'>
  <img src={img2} className="tri" alt="pic"></img>
    
<h1 className='spga'>Football Ball</h1>
<span className='que'>Prize : ₹4,554 <del className='del'> M.R.P. : ₹7,956</del></span><p  className='sav'>Save upto 46%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>

<div className='c1'>
<img src={'https://m.media-amazon.com/images/I/61Nw5HX6JRL._AC_UL480_FMwebp_QL65_.jpg'} className="tri" alt="pic"></img>

<h1 className='spga'>Football guard</h1>
<span className='que'>Prize : ₹2,160 <del className='del'> M.R.P. : ₹3,240</del></span><p  className='sav'>Save upto 33%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>

<div className='c1'>
<img src={img12} className="tri" alt="pic"></img>

<h1 className='spga'>Football Cones</h1>
<span className='que'>Prize : ₹1,741 <del className='del'> M.R.P. : ₹2,693</del></span><p  className='sav'>Save upto 39%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>

</div>



<div className='container1'>

<div className='c1'>
  <img src={'https://m.media-amazon.com/images/I/3139Jd+OJEL._AC_UL480_FMwebp_QL65_.jpg'} className="cri" alt="pic"></img>
   
  <h1 className='spga'> Football training kit</h1>
  <span className='que'>Prize : ₹7,108 <del className='del'> M.R.P. : ₹10,156</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>

<div className='c1'>
  <img src={img5} className="cri" alt="pic"></img>
   
   <h1 className='spga'>Shooting pad</h1>
   <span className='que'>Prize : ₹14,850 <del className='del'> M.R.P. : ₹21,219</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>

 <div className='c1'>
  <img src={img3} className="fot1" alt="pic"></img>
   
   <h1 className='spga'>Football Set</h1>
   <span className='que'>Prize : ₹13,489 <del className='del'> M.R.P. : ₹21,582</del> </span><p  className='sav'>Save upto 37%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>
  </div>














        </div>
        <Footer/>
        
        </>
    )
 }

export default Football