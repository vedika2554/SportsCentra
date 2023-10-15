import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import { useState } from 'react'
import './../Sketing/Sketing.css';




  function Sketing(){
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
            
                      
       <h1 className='tt1'>Sketing Equipment</h1>
       <hr className='hre'/>
   <div className='container1'>

           <div className='c1'>
              <img className='tri'src={"https://m.media-amazon.com/images/I/61xN7L1kK2L._AC_UL480_FMwebp_QL65_.jpg"}/>
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
              <img className='tri'src={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNlCe-p3suMRFPrKoiUPDtMSTs8YyrL4Jb1tqFcaOg3MIeV-ttSHbuX4MSTCnV-o_6HPvpPdTuF1o6LfJPswffk5lPhRD6WxutMYFG4k8RkpKP4CSae6rGG3ffn05m7I6VjTHxwXE&usqp=CAc"}/>
              <h1 className='spga'>Sketting Helmet</h1>
            
          <span className='que'>Prize : ₹599 <del className='del'> M.R.P. : ₹899</del></span> <p  className='sav'>Save upto 45%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
          <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p> </div>

            <div className='c1'>
              <img className='tri'src={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSLYtoTKihHVaQlJ7t5rxaydz8h2xCuEyzdsg16VdO4mWqTKLxhJUBD-btg1oV9-QQMd1vaXysvxOgZyC1i_huHqiq8VgPsaNRuNwqpkhbiPoOvdrIbdN53LGSYENtSWAnC2h8xA2k&usqp=CAc"}/>
              <h1 className='spga'>Knee Pads</h1>
              <span className='que'>Prize : ₹299 <del className='del'> M.R.P. : ₹599</del> </span> <p  className='sav'>Save upto 54%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
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
  <img className='tri'src={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7svxmuDW2Q8bgvPlsZzpjMJHBGaPvC7mOPvnXgS1LwB8O49s858vOLJMrN_jpo6538YqmTecIyzGGYEBU0O85gzevKSDiLJcwttlCy0hxh1ZtfH4lMuDErqVYuNryDGjcKwOEovOFtg&usqp=CAc"}/>
  <h1 className='spga'>Elbow Pads</h1>
  <span className='que'>Prize : ₹325 <del className='del'> M.R.P. : ₹399</del> </span> <p  className='sav'>Save upto 11%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='tri'src={"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcST8JszpFlHTjMV13xsgsL74eBVvXh4UzMztz718F5nruDl8hVjDGwAKi4uQkv-mWgc0l9vhAnYnyWmxTL3Q_sTb4bQsMpVSHjPh1U_fnutAPEebUTTGo1UN3wUXOmm0YUQhI97WNyXdQ&usqp=CAc"}/>
  <h1 className='spga'>Wrist Guard</h1>
  <span className='que'>Prize : ₹399 <del className='del'> M.R.P. : ₹499</del> </span> <p  className='sav'>Save upto 40%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
  <img className='tri'src={ "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR_BPtsrNg6604KeB75pAHUMWiSLNReb1PkcEl9PcLnPhGHUv3bZuOLRqU0U9LPijs3OdGNJp4NyROHs4jj1THIQ0Zjl0WGnEPBMYImI_bMTeGRHNLdrYEpNDpCMfJu6q7Ueia12KjB1Q&usqp=CAc"}/>
  <h1 className='spga'>Sketing Gloves</h1>
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
   <img className='tri'src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnELfyLQMzYE3XFTwPwqHpQG87HKg4VJZ4V3aueGojLw&s"}/>
  <h1 className='spga'> Padded Shorts</h1>
  <span className='que'>Prize : ₹716 <del className='del'> M.R.P. : ₹1,299</del></span> <p  className='sav'>Save upto 45%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
   <img className='tri'src={"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR6ckNhCVqmb5YbB8eHVeea5G1_5iTlpb9ecHga6F82Wbg8EjfuW_nVN8BKhj24Dfcma9_ZWRts2qCDF2hxtGZjj9TCwNUhEmH-fAAkupkUCWpH1dDuyTFuRQWJmOYqk7OSm8j3xUZq&usqp=CAc"}/>
   <h1 className='spga'>Sketing Socks</h1>
   <span className='que'>Prize : ₹599<del className='del'> M.R.P. : ₹799</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

 <div className='c1'>
   <img className='tri'src={"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1tvQGTM0PLGAohormH5rzfbWkTji_fMyAsqE_yxkQMbZJLEkmRJGBX9jXGhJbxmgGfuaHu4xIOutN8MKq2b6C38VrRsqosUwIpjMZCxfV9zUtIHDFvnqfm_6XCb8SsoJCMULByswj6ZA&usqp=CAc"}/>
   <h1 className='spga'>Sketing Set</h1>
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
<img className='cri'src={"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSv2LBQ4p41132QcSUlvaXfwtofICauPSyXvypQU7IC0j3s9CkGcFVwM6GDq_4C7t3gJ37n-xAtLnKtgNOjhtT6MrIiPuggprwMkUE2-P805WyW-VEorLlATKcav5LlEgQaoyAtVMl0PSk&usqp=CAc"}/>
<h1 className='spga'>Sketting Neck Guard</h1>
<span className='que'>Prize : ₹899 <del className='del'> M.R.P. : ₹1199</del></span><p  className='sav'>Save upto 46%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
<img className='fot'src={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR56-KwwSH0Q89jGs3fgK-uXNdZVQmSj9KokYe-JDEO3lzfhPbkJ0QoCiTAHofbOk5h-nKNYAlNRYPKk4-1sM1AAt7x3OTFB2IkRQ9rAoa2w098mL1aIrSvGZSaUR-qvxm_UiKomJeBNg&usqp=CAc"}/>
<h1 className='spga'>Eye Protection</h1>
<span className='que'>Prize : ₹599 <del className='del'> M.R.P. : ₹799</del></span><p  className='sav'>Save upto 33%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
<div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
<img className='fot'src={ "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPYTMzNOgULuC5vm0a6S-lE7UDWMFJBeTwVwrbg_rb1Lg2UFed_GcXoGfafzVyDS3DVh9X_EfriakTP8mM-oW6YUS7EfNqtQIuHs4sIsV2Yg7Wtaek6Rh9nH4x3SIejDn9VsUHNTNvbd4&usqp=CAc"}/>
<h1 className='spga'>Skates</h1>
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
   <img className='tri'src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-z2YFK-kh9wuJC37YydzeBBIXvsZsJzAwJeCsViPLQ&s"}/>
  <h1 className='spga'>Speed Skates</h1>
  <span className='que'>Prize : ₹2,108 <del className='del'> M.R.P. : ₹3,156</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
  <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div><p><button  className='tata'>Buy now</button></p></div>

<div className='c1'>
   <img className='tri'src={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQiTs-QyyatF0jR_pDtyGy9_AIxjDlngS1zVoC7dtjG-5-LJNc0ribcZVPLSWWmSPLBfdaWJ-LWk6qkhBgfwSzXXog0RpqgvP89HUQKx5GmVW_UY4s14UXc7vTvANSfqeRmAC_EWg&usqp=CAc"}/>
   <h1 className='spga'>Bottle</h1>
   <span className='que'>Prize : ₹1299 <del className='del'> M.R.P. : ₹1499</del></span><p  className='sav'>Save upto 30%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
   <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p></div>

 <div className='c1'>
   <img className='tri'src={"https://m.media-amazon.com/images/I/919KNiMjecL._SX679_.jpg"}/>
   <h1 className='spga'>Sketing Set</h1>
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
 export default Sketing


