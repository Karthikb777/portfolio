import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



function Contact() {
    return(
        <>   
        <section className="kb-landingPage">
            <div className="kb-headerGrp kb-email">
            <div className="">
            <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="kb-header-small">Contact me at</motion.h3>
                <div className="header-flex" style={{ display: "flex" }}>
                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                drag
                className="kb-header kb-emailHeader">
                    <a target="_blank" rel="noreferrer" className="kb-link" href="mailto:karthik.barati.777@gmail.com">karthik.barati.777@gmail.com</a>
                </motion.h3>
                
                </div>
                <div className="header-flex" style={{ display: "flex" }}>
                </div>
                
                <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="kb-social-links">
                <p>Social links</p>
            <motion.ul
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="kb-social">
                <li classname="kb-icon"><a target="_blank" rel="noreferrer" className="kb-link kb-header-small" href="https://github.com/Karthikb777">Github</a></li>
                <li classname="kb-icon"><a target="_blank" rel="noreferrer" className="kb-link kb-header-small" href="https://www.linkedin.com/in/karthik-hk">LinkedIn</a></li>
                <li classname="kb-icon"><a target="_blank" rel="noreferrer" className="kb-link kb-header-small" href="https://www.instagram.com/karthikbaraati/">Instagram</a></li>
            </motion.ul>
            </motion.div>
            </div>
            </div>
        </section>
        </>
        );
}


export default Contact;