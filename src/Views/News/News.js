import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import './../News/News.css'

export default function News(){
return(
    <>
    <Navbar/>
<div className='bt'>
            
                      
<h1 className='tt1'>Trending news</h1>
<hr className='hre'/>
<div className='container1'>

    <div className='ct1'>
       <img className='dri'src={"https://images.indianexpress.com/2023/10/Rohit-1.jpg?w=640"}/>
      <h2 className='nt1'>After India vs Pakistan game, Mickey Arthur says: ‘Didn’t seem like ICC event… didn’t hear Dil Dil Pakistan’</h2>
   <span className='bnm'><Link to='https://indianexpress.com/article/sports/cricket-world-cup/after-india-vs-pakistan-game-mickey-arthur-complains-didnt-seem-like-icc-event-didnt-hear-dil-dil-pakistan-8983176' className='bnm'>Read more</Link></span>
    </div>

   

     <div className='ct1'>
       <img className='dri'src={"https://images.indianexpress.com/2023/10/ARS-MCI-2.jpg?w=640"}/>
       <h2 className='nt1'>Premier League: Tottenham Hotspur hold on to top spot thanks to arch-rivals Arsenal’s win over Manchester City</h2>
       <span className='bnm'><Link to='https://indianexpress.com/article/sports/football/premier-league-tottenham-hotspur-hold-on-to-top-spot-thanks-to-arch-rivals-arsenals-win-over-manchester-city-8974017/'className='bnm'>Read more</Link></span>
    </div> 
      </div>



      <div className='container1'>

<div className='ct1'>
   <img className='dri'src={"https://images.indianexpress.com/2023/10/Carlsen-8.jpg?w=640"}/>
  <h2 className='nt1'>Magnus Carlsen after shock loss at Qatar Masters: Saw my opponent wearing an analog watch… lost my ability to concentrate’</h2>
<span className='bnm'><Link to='https://indianexpress.com/article/sports/chess/as-soon-as-i-saw-my-opponent-wearing-a-watch-early-in-game-i-lost-my-ability-to-concentrate-carlsen-says-after-losing-at-qatar-masters-89804' className='bnm'>Read more</Link></span>
</div>



 <div className='ct1'>
   <img className='dri'src={"https://images.indianexpress.com/2023/10/SHAHEEN-SHAH-AFRIDI-CROPPED-NIRMAL-HARINDRAN.jpg?w=640"}/>
   <h2 className='nt1'>‘Shaheen Shah Afridi is not Wasim Akram, so let’s not overhype him,’ says Ravi Shastri after Pakistan’s defeat to India</h2>
   <span className='bnm'><Link to='https://indianexpress.com/article/sports/cricket-world-cup/shaheen-shah-afridi-is-not-wasim-akram-so-lets-not-overhype-him-says-ravi-shastri-after-pakistans-defeat-to-india-8983135/'className='bnm'>Read more</Link></span>
</div> 
  </div>




  <div className='container1'>

<div className='ct1'>
   <img className='dri'src={"https://images.indianexpress.com/2023/10/city-arsenal-1.jpg?w=640"}/>
  <h2 className='nt1'>Arsenal vs Manchester City: A season-defining game awaits</h2>
<span className='bnm'><Link to='https://indianexpress.com/article/sports/football/arsenal-vs-manchester-city-a-season-defining-game-awaits-8973112/' className='bnm'>Read more</Link></span>
</div>



 <div className='ct1'>
   <img className='dri'src={"https://images.indianexpress.com/2023/09/Tennis-2-1.jpg?w=640"}/>
   <h2 className='nt1'>India, Pakistan drawn in Davis Cup again, PTF refuses to play at neutral venue</h2>
   <span className='bnm'><Link to='https://indianexpress.com/article/sports/tennis/india-pakistan-drawn-in-davis-cup-again-ptf-refuses-to-play-at-neutral-venue-8950623/'className='bnm'>Read more</Link></span>
</div> 
  </div>





  <div className='container1'>

<div className='ct1'>
   <img className='dri'src={"https://images.indianexpress.com/2022/09/Magnus-Carlsen-vs-Hans-Hiemann-1.jpg?w=640"}/>
  <h2 className='nt1'>Hans Niemann: said Magnus Carlsen is a bully used his entire empire to attack me’</h2>
<span className='bnm'><Link to='https://indianexpress.com/article/sports/chess/hans-niemann-of-course-magnus-carlsen-is-a-bully-used-his-entire-empire-to-attack-me-8956411/' className='bnm'>Read more</Link></span>
</div>



 <div className='ct1'>
   <img className='dri'src={"https://images.indianexpress.com/2023/10/indian-team.jpg?w=640"}/>
   <h2 className='nt1'>Indian cricket team is putting on a spectacular show of skills this World Cup, and you’d easily pay to watch it</h2>
   <span className='bnm'><Link to='https://indianexpress.com/article/sports/cricket-world-cup/indian-cricket-team-is-putting-on-a-spectacular-show-of-skills-this-world-cup-and-youd-easily-pay-to-watch-it-8983907/'className='bnm'>Read more</Link></span>
</div> 
  </div>






  <div className='container1'>

<div className='ct1'>
   <img className='dri'src={"https://images.indianexpress.com/2023/09/federer.jpg?w=640"}/>
  <h2 className='nt1'>Roger Federer match-worn outfit from 20th major title run expected to fetch 29 lakhs at auction</h2>
<span className='bnm'><Link to='https://indianexpress.com/article/sports/tennis/roger-federer-match-worn-outfit-from-20th-major-title-run-expected-to-fetch-29-lakhs-at-auction-8949039' className='bnm'>Read more</Link></span>
</div>



 <div className='ct1'>
   <img className='dri'src={"data:image/jpeg;base64,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"}/>
   <h2 className='nt1'>Arctic Open: PV Sindhu Beats Thuy Linh Nguyen In 3-sets, Enters Semi-Finals</h2>
   <span className='bnm'><Link to=''className='bnm'>Read more</Link></span>
</div> 
  </div>









      </div>














    

    
  

      <Footer/>
    </>
      )
      }