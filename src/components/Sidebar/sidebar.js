import React from 'react';
import "./sidebar.css";
import {Link} from "react-scroll";


const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={toggleSidebar}>
        ✕
      </button>
      <nav className="sidebar-content">
        <ul>
          <li><a href="#intro" className="desktopMenuListItem" onClick={toggleSidebar}>Home</a></li>
          <li><a href="#aboutMe" className="desktopMenuListItem" onClick={toggleSidebar}>About</a></li>
          <li><a href="#techtools" className="desktopMenuListItem" onClick={toggleSidebar}>Technologies</a></li>
          <li><a href="#keyskills" className="desktopMenuListItem" onClick={toggleSidebar}>Key Skills</a></li>
          <li><a href="#contactInfo" className="desktopMenuListItem" onClick={toggleSidebar}>Contact</a></li>

        </ul>

        {/* <div className='desktopMenu'>
            <Link to="intro" smooth={true} duration={500} className="desktopMenuListItem">Home</Link>
            <Link to="aboutMe" smooth={true} duration={500} className="desktopMenuListItem">About</Link>
            <Link to="techtools" smooth={true} duration={500} className="desktopMenuListItem">Technologies</Link>
            <Link to="keyskills" smooth={true} duration={500} className="desktopMenuListItem">Key Skills</Link>

            <Link to="contactInfo" smooth={true} duration={500} className="desktopMenuListItem">Contact</Link>
        </div> */}
      </nav>
    </div>
  )
}

export default Sidebar