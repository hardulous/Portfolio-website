import React, { useState } from 'react'
import S from "./Nav.module.css"
import { useLocation } from 'react-router-dom'
const Nav = () => {

  const [openHam, setopenHam] = useState(false)
  const location = useLocation();

  const isActive = (path)=>{
    if(location.hash===path){
      return {
        color:"var(--color-primary)"
      }
    }
    else{
      return {
        color:"white"
      }
    }
  }

  const toogleHam = ()=>{
    setopenHam(!openHam);
  }

  const handleClick = ()=>{
    toogleHam()
  }

  return (
    <div className={`${S.NavContainer}`} id="home">
      <nav>

        {/* <div className={`${S.navLogo}`}>
          <img src={logo} alt="aman.png" />
        </div> */}

        <ul className={openHam?`${S.active}`:''}>
          <li><a href="#home" style={isActive("#home")} onClick={handleClick}>Home</a></li>
          <li><a href="#about" style={isActive("#about")} onClick={handleClick}>About</a></li>
          <li><a href="#experience" style={isActive('#experience')} onClick={handleClick}>Experience</a></li>
          <li><a href="#portfolio" style={isActive('#portfolio')} onClick={handleClick}>Portfolio</a></li>
          <li><a href="#contact" style={isActive('#contact')} onClick={handleClick}>Contact</a></li>
        </ul>
        
        <div className={openHam?`${S.hamBurger} ${S.active}`:`${S.hamBurger}`} onClick={toogleHam}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>
    </div>
  )
}

export default Nav