import React, { useState } from 'react';
import { MdMapsHomeWork } from "react-icons/md";
import { AiOutlineUser } from 'react-icons/ai';
import { FaCode } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";


import './topbar.css';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><MdMapsHomeWork /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaCode /></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FaTasks /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdAlternateEmail /></a>
    </nav>
  )
}

export default Topbar;