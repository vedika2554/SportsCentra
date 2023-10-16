<<<<<<< HEAD
=======
import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import './../About/About.css'
export default function About(){
    return(
        <>
        <Navbar/>
        <div className='opo'>
       
        <h1 className='tt2'>About us</h1>
            <hr className='hre'/>
            <div className='container1'>

            <div className='car1'>
           <img className='rcri'src={'https://cdn-icons-png.flaticon.com/128/7562/7562551.png'}/>
              <h1 className='mol'>Our store</h1>
              <p className='ou-se'>Get the information about our store and give us feedback</p>
            </div>

            <div className='car1'>
               <img className='rcri'src={"https://cdn-icons-png.flaticon.com/128/6994/6994484.png?ga=GA1.1.738810621.1697097674&track=ais"}/>
               <h1 className='mol'>Contact us</h1>
               <p className='ou-se'>Contact us for any quary and help us to acheive our goal</p>
            </div>

             <div className='car1'>
              <img className='rcri'src={"https://cdn-icons-png.flaticon.com/128/417/417782.png"}/> 
               <h1 className='mol'>Team members</h1>
               <p className='ou-se'>Connect with our team for 24 hours support and give suggesion</p>
            </div> 
              </div>
          </div>
          <Footer/>
          </>
    )
}
>>>>>>> 6441fb500a9dc70ee41ae25da45fe625948a04a8
