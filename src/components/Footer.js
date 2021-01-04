import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Link
  } from 'react-router-dom';



function Footer() {
    return(
        <>
            <footer className="kb-footer">
                <p>
                This project was created because, I didn't have a quick and easy way to get detailed information of covid 19 statistics of my native state of Karnataka, India. This site is Built with Reactjs and gets the data from an open source API from covid19india.org. <br/><br />Made with: HTML5, CSS3, Javascript and ReactJS.<br /><br />
                </p>
            {/* <p className="kb-copyright">© 2020-21 | Karthik HK</p> */}
            </footer>
        </>
    );
}

export default Footer;
