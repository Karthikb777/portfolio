import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Link
  } from 'react-router-dom';

  const variants = {
    open: { y: 0 },
    closed: { y: "-100%" },
  }

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return( 
        <>
            <nav class="kb-navbar">
                <h3 class="kb-logo"><Link className='kb-link' to='/'>Karthik HK</Link></h3>
                <p class="kb-menu" onClick={() => setIsOpen(!isOpen)}>M E N U</p>
            </nav>
            <motion.ul 
            animate={isOpen ? "open" : "closed"}
            variants={variants} 
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="kb-nav">
                <li id="li-home" class="navElement"><Link className='kb-link-menu' to='/' onClick={() => setIsOpen(!isOpen)}>Home</Link></li>
                <li id="li-about" class="navElement"><Link className='kb-link-menu' to='/about' onClick={() => setIsOpen(!isOpen)}>About Me</Link></li>
                <li id="li-sp" class="navElement"><Link className='kb-link-menu' to='/skills-projects' onClick={() => setIsOpen(!isOpen)}>Skills & projects</Link></li>
                <li id="li-contact" class="navElement"><Link className='kb-link-menu' to='/contact' onClick={() => setIsOpen(!isOpen)}>Contact Me</Link></li>
                {/* <!-- <li class="navElement copyRight">Copyright 2020-21 | Karthik HK</li> --> */}
            </motion.ul>
        </>
    );
}

export default Nav;


