import './Productcard.css'
import imgsport from  './../Image/sporty-dla-poczatkujacych (1).jpg'
export default function Productcard()
{
  return(
    <div className='card'>
         <h1><span className='a'>Sports Equipment</span><h1 className='b'>Up T0</h1><span className='c'> 30%-70% </span> <span className='g'> Off</span><p className='d'>UP TO 12 MONTHS | EXCHANGE OFFERS</p>
<p className='e'>NO COST EMI | SCHEDULED DELIVERY</p>
<p className='f'>COMBO OFFERS | BIG DISCOUNT</p>
<div>
<button className='btn1'>Buy now</button>
<button className='btn2'>Trending Equipment</button>
</div></h1>

<img className='sport'src={ imgsport}/>

    </div>
  )
}