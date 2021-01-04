import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Link
  } from 'react-router-dom';

  const variants = {
    open: { y: 0 },
    closed: { y: "-100vh" },
  }

  const initial = { y: "-100vh" }

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return( 
        <>
            <nav className="kb-navbar">
                {/* TODO : TAKE CARE OF LOGO COLOR CHANGING */}
                <h3 className="kb-logo" style={{ color: isOpen ? "white" : "black" }}><Link className='kb-link' to='/'>Karthik HK</Link></h3>
                <p className="kb-menu" onClick={() => setIsOpen(!isOpen)}>{ isOpen ? "C L O S E" : "M E N U"}</p>
            </nav>
            <motion.ul 
            animate={isOpen ? "open" : "closed"}
            variants={variants} 
            initial={initial}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="kb-nav">
                <motion.li id="li-home" className="navElement"><Link className='kb-link-menu' to='/' onClick={() => setIsOpen(!isOpen)}>Home</Link></motion.li>
                <motion.li id="li-about" className="navElement"><Link className='kb-link-menu' to='/about' onClick={() => setIsOpen(!isOpen)}>About Me</Link></motion.li>
                <motion.li id="li-sp" className="navElement"><Link className='kb-link-menu' to='/skills-projects' onClick={() => setIsOpen(!isOpen)}>Skills & projects</Link></motion.li>
                <motion.li id="li-contact" className="navElement"><Link className='kb-link-menu' to='/contact' onClick={() => setIsOpen(!isOpen)}>Contact Me</Link></motion.li>
                {/* <!-- <li className="navElement copyRight">Copyright 2020-21 | Karthik HK</li> --> */}
            </motion.ul>
            
        </>
    );
}

export default Nav;


