import React from 'react';
import './navbar.css';
import {Link} from "react-scroll"

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* <img src={logo} alt='' className='logo'/> */}
      <div className='logo'>
        <p className='har'>Harish<span className='ram'> Ramani</span><span className='dot'>.</span></p>
      </div>
      <div className='desktopMenu'>
        <Link to="intro" smooth={true} duration={500} className="desktopMenuListItem">Home</Link>
        <Link to="aboutMe" smooth={true} duration={500} className="desktopMenuListItem">About</Link>
        <Link to="techtools" smooth={true} duration={500} className="desktopMenuListItem">Technologies</Link>
        <Link to="keyskills" smooth={true} duration={500} className="desktopMenuListItem">Key Skills</Link>

        <Link to="contactInfo" smooth={true} duration={500} className="desktopMenuListItem">Contact</Link>
      </div>
      {/* <button className='contactMe'>
        <img src={contactMe} alt="" className='contactMeImg'/>Contact Me
      </button> */}

    </nav>
  )
}

export default Navbar