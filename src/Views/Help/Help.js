import Navbar from './../../Component/Navbar/Navbar'
import Footer from './../../Component/Footer/Footer'
import { Link } from 'react-router-dom'
import './../Help/Help.css'
export default function Help(){
    return(
        <>
        <Navbar/>
<div className='po'>
            
<h1 className='tt1'>Need any help</h1>
            <hr className='hre'/>
<div className='container1'>

           <div className='c1'>
              <img className='fri'src={"https://cdn-icons-png.flaticon.com/128/2556/2556437.png?ga=GA1.1.738810621.1697097674"}/>
             <h2 className='ann'>Report if something suspicious happens to you while using our website</h2>
          
           
           </div>
           <div className='c1'>
              <img className='fri'src={"https://cdn-icons-png.flaticon.com/128/7608/7608617.png?ga=GA1.1.738810621.1697097674&track=ais"}/>
             <h2 className='ann'>Memberbership, doubts, Subscriptions or any Communications problems</h2>
          
           
           </div>
           <div className='c1'>
              <img className='fri'src={"https://cdn-icons-png.flaticon.com/128/3811/3811645.png?ga=GA1.1.738810621.1697097674&track=ais"}/>
             <h2 className='ann'>After your initial visit to our website we may change the cookies we use</h2>
          
           
           </div>
          </div>


          <div className='container1'>

  <div className='c1'>
              <img className='lri'src={"https://cdn-icons-png.flaticon.com/128/3262/3262338.png?ga=GA1.1.738810621.1697097674&track=ais"}/>
             <h2 className='ann'>Payment , charges or Gift card</h2>
          
           
           </div>
           <div className='c1'>
              <img className='lri'src={"https://cdn-icons-png.flaticon.com/128/9672/9672086.png?ga=GA1.1.738810621.1697097674&track=ais"}/>
             <h2 className='ann'>Address , Security and Privacy</h2>
          
           
           </div>
           <div className='c1'>
              <img className='fri'src={"https://cdn-icons-png.flaticon.com/128/6009/6009591.png"}/>
             <h2 className='ann'>Something else problem on our website , Question us !</h2>
          
           
           </div>
</div>



<div className='more'>
<div className='cmo'>
           
           <h2 className='ann1'>More info</h2>
        
         
         </div>

<div className='com'>
         
         
           <Link to='/Faq'className='ri1'><h2 className='ann1'>FAQ</h2></Link>
        
         
         </div>
         <div className='com'>
           
           <h2 className='ann1'>Terms and conditions</h2>
        
         
         </div>
         <div className='com'>
          
           <h2 className='ann1'>Privacy policy</h2>
        
         
         </div>
</div>


</div>    

          <Footer/>
          </>
    )
}