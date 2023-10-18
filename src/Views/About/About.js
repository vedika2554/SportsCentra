import Navbar from './../../Component/Navbar/Navbar'
import Footer from './../../Component/Footer/Footer'
import './../About/About.css'
import { Link } from 'react-router-dom'
export default function About(){
    return(
        <>
        <Navbar/>
        <div className='opo'>







        <h1 className='tt1'>About us</h1>
            <hr className='hre'/>
<div className='container1'>

           <div className='c1'>
              <img className='fri'src={"https://cdn-icons-png.flaticon.com/128/7562/7562551.png"}/>
              <h1 className='mol'>Our store</h1>
             <h2 className='ann'>Get the information about our store and give us feedback</h2>
          
           
           </div>
           <div className='c1'>
              <img className='fri'src={"https://cdn-icons-png.flaticon.com/128/6994/6994484.png?ga=GA1.1.738810621.1697097674&track=ais"}/>
              <h1 className='mol'>Contact us</h1>
             <h2 className='ann'>Contact us for any quary and help us to acheive our goal</h2>
          
           
           </div>
           <div className='c1'>
           <Link to='/Teammember' > <img className='fri'src={"https://cdn-icons-png.flaticon.com/128/417/417782.png"}/></Link>
          <Link to='/Teammember'className='ril' ><h1 className='mol'>Team members</h1></Link> 
             <h2 className='ann'>Connect with our team for 24 hours support and give suggesion</h2>
          
           
           </div>
          </div>









     
          </div>
          <Footer/>
          </>
    )
}