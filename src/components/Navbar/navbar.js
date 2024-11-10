import React, { useState } from 'react';
import './navbar.css';
// import {Link} from "react-scroll"
import Sidebar from '../Sidebar/sidebar';

const Navbar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className='navbar'>
      {/* <img src={logo} alt='' className='logo'/> */}
      <div className='logo'>
        <p className='har'>Harish<span className='ram'> Ramani</span><span className='dot'>.</span></p>
      </div>
      {/* <div className='desktopMenu'>
        <Link to="intro" smooth={true} duration={500} className="desktopMenuListItem">Home</Link>
        <Link to="aboutMe" smooth={true} duration={500} className="desktopMenuListItem">About</Link>
        <Link to="techtools" smooth={true} duration={500} className="desktopMenuListItem">Technologies</Link>
        <Link to="keyskills" smooth={true} duration={500} className="desktopMenuListItem">Key Skills</Link>

        <Link to="contactInfo" smooth={true} duration={500} className="desktopMenuListItem">Contact</Link>
      </div> */}
      {/* <button className='contactMe'>
        <img src={contactMe} alt="" className='contactMeImg'/>Contact Me
      </button> */}


      <button className="menu-icon" onClick={toggleSidebar}>
        ☰
      </button>
      {/* Sidebar component, only visible when isSidebarOpen is true */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

    </nav>
  )
}

export default Navbar