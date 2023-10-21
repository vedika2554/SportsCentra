import Navbar from './../../Component/Navbar/Navbar'
import Footer from './../../Component/Footer/Footer'
import { Link } from 'react-router-dom';
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
        <div className='bt'>
            
                      
       <h1 className='tt1'>Cycling Equipment</h1>
       <hr className='hre'/>
   <div className='container1'>

           <div className='c1'>
              <img className='fot'src={'https://m.media-amazon.com/images/I/81y9uUq1lnL._AC_UL480_FMwebp_QL65_.jpg'}/>
             <h1 className='spga'>Cycle</h1>
             <span className='que'>Prize : ₹4,499 <del className='del'>  M.R.P. : ₹11,999</del> </span> <p className='sav'>Save upto 63%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
              <img className='cri'src={"https://www.sefiles.net/merchant/4598/images/site/1540841266449.jpg"}/>
              <h1 className='spga'>Helmet</h1>
            
          <span className='que'>Prize : ₹1,220 <del className='del'> M.R.P. : ₹3,042</del></span> <p  className='sav'>Save upto 45%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
  <img className='cri'src={"https://www.sefiles.net/merchant/4598/images/site/1540841033965.jpg"}/>
  <h1 className='spga'>Tire leavers</h1>
  <span className='que'>Prize : ₹625 <del className='del'> M.R.P. : ₹699</del> </span> <p  className='sav'>Save upto 11%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>-
                  <i class="fa-solid fa-star checked"></i>
                  </div>
             <p><button className='tata'><Link className='ink'to='/Buy'>Buy now</Link></button></p>
           </div>


             </div>
             <div className='container1'>


             <div className='c1'>
              <img className='pri'src={"https://www.sefiles.net/merchant/4598/images/site/1540841197922-slimC.jpg?t=1540841214615"}/>
              <h1 className='spga'>Hydration</h1>
              <span className='que'>Prize : ₹500 <del className='del'> M.R.P. : ₹1,200</del> </span> <p  className='sav'>Save upto 54%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
  <img className='pri'src={"https://www.sefiles.net/merchant/4598/images/site/1540840987688.jpg"}/>
  <h1 className='spga'>Spare Tube</h1>
  <span className='que'>Prize : ₹1000 <del className='del'> M.R.P. : ₹1,400</del> </span> <p  className='sav'>Save upto 40%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
  <img className='pri'src={ "https://www.sefiles.net/merchant/4598/images/site/1540840944926.jpg"}/>
  <h1 className='spga'>Pump</h1>
  <span className='que'>Prize : ₹872 <del className='del'> M.R.P. : ₹1,193</del> </span> <p  className='sav'>Save upto 31%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
   <img className='cri'src={"https://www.sefiles.net/merchant/4598/images/site/1540840906557.jpg"}/>
  <h1 className='spga'>Multi Tool</h1>
  <span className='que'>Prize : ₹716 <del className='del'> M.R.P. : ₹1,299</del></span> <p  className='sav'>Save upto 45%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
   <img className='cri'src={"https://www.sefiles.net/merchant/4598/images/site/1540840856785.jpg"}/>
   <h1 className='spga'>Seat Bag</h1>
   <span className='que'>Prize : ₹2000<del className='del'> M.R.P. : ₹1,600</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
   <img className='cri'src={"https://rukminim2.flixcart.com/image/612/612/xif0q/cyclocomputer/7/o/r/bicycle-computer-odometer-speedometer-wired-cyclocomputer-original-imaggwwffssspnkh.jpeg?q=70"}/>
   <h1 className='spga'>Odometer</h1>
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
<img className='cri'src={"https://rukminim2.flixcart.com/image/612/612/ku4ezrk0/cover/g/6/f/3d-sponge-free-size-st-2247-strauss-original-imag7be59bd2ff4a.jpeg?q=70"}/>
<h1 className='spga'>Sponge cycle seat</h1>
<span className='que'>Prize : ₹3,554 <del className='del'> M.R.P. : ₹6,956</del></span><p  className='sav'>Save upto 46%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
<img className='fot'src={"https://rukminim2.flixcart.com/image/612/612/jcjejrk0/sport-glove/u/4/c/lift-and-right-l-pro-biker-full-finger-110-l-cycling-gloves-original-imaffmghuhff8ufz.jpeg?q=70"}/>
<h1 className='spga'> Cycling Gloves</h1>
<span className='que'>Prize : ₹1,160 <del className='del'> M.R.P. : ₹2,240</del></span><p  className='sav'>Save upto 33%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
<img className='fot'src={ "https://m.media-amazon.com/images/I/612VDkue17L._AC_UL480_FMwebp_QL65_.jpg"}/>
<h1 className='spga'>shoes</h1>
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
   <img className='tri'src={"https://rukminim2.flixcart.com/image/612/612/l47cu4w0/bicycle-brake-disk/s/e/7/bicycle-disk-brake-rooter-2-5-hitman-original-imagf5pyewzyg2zj.jpeg?q=70"}/>
  <h1 className='spga'>Bicycle Disk Break</h1>
  <span className='que'>Prize : ₹2,108 <del className='del'> M.R.P. : ₹3,156</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
   <img className='tri'src={"https://rukminim2.flixcart.com/image/612/612/kwtkxow0/fender/d/h/u/bicycle-full-length-front-rear-fender-black-green-bicycle-full-original-imag9esruyyddx3z.jpeg?q=70"}/>
   <h1 className='spga'>Front and Rear Fender</h1>
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
   <img className='tri'src={"https://m.media-amazon.com/images/I/515g7LbvP9L._AC_UL480_FMwebp_QL65_.jpg"}/>
   <h1 className='spga'>Cycle bell</h1>
   <span className='que'>Prize : ₹161 <del className='del'> M.R.P. : ₹499</del></span><p  className='sav'>Save upto 68%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
 export default Hockey

