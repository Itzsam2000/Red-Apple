import "../hero/hero.css"
import { useState } from "react";
import {BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs"
import herovideo from "../assets/hero.mp4"
export default function Hero() {
  
  const [scrolled, setscrolled] = useState(false);
  const changeNavbar = () =>{
     if(window.scrollY >= 100){
       setscrolled(true);
     }
     else{
       setscrolled(false);
     }
  };
  window.addEventListener('scroll', changeNavbar);
  return (
    <div className='components__container'>
        <video src={herovideo} loop autoPlay muted className="hero__video" />
       <div className="hero__writing__section">
        <div className="hero__heading">Cultivate + Delight</div>
        <p>Striving for the Freshest Flavors</p>
        <button className="hero__button" title="choose your favorite Apple">
        Which Apple is your Favorite?
        </button>
       </div>


       <div className='hero__social__links' style={{flexDirection: scrolled? 'column-reverse' : 'row',right: scrolled? '-12.5%':'0',  bottom: scrolled? '40%':'0' }}>

               

                   <a href='google.com' target='_blank'> <BsFacebook /></a>
                   <a href='google.com' target='_blank'> <BsInstagram /></a>
                   <a href='google.com' target='_blank'>   <BsYoutube /></a>

            
                

              </div>
    </div>

  )
}
