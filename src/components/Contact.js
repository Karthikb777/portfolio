import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return(
        <>
            <motion.div initial={{ x: '100vw' }}
             animate={{ x: 0 }}
             transition={{ duration: 0.6 }}
             className="kb-contact">
            <div class="wrapper wrapper-contact">
            <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            class="kb-header-small">CONTACT ME</motion.h3>
            {/* <svg className="kb-contact-bg" width="852" height="1052" viewBox="0 0 672 452" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Rectangle 1" d="M0 0H1129V452H0V0Z" fill="#223471" fill-opacity="0.8"/>
</svg> */}
            <div className=" kb-contact-wrapper">
            <motion.div
            className="kb-contact-anim">
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.5}}
                className="kb-letter">L</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.95}}
                className="kb-letter in">E</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.65}}
                className="kb-letter">T</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.55}}
                className="kb-letter">S</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.4}}
                className="kb-letter in">W</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:2.1}}
                className="kb-letter">O</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.9}}
                className="kb-letter">R</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:2.2}}
                className="kb-letter in">K
                </motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:2}}
                className="kb-letter">T</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.8}}
                className="kb-letter">O</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.6}}
                className="kb-letter in">G</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.3}}
                className="kb-letter">E</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.7}}
                className="kb-letter">T</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.5}}
                className="kb-letter in">H</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.4}}
                className="kb-letter">E</motion.p>
                <motion.p 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay:1.1}}
                className="kb-letter in">R</motion.p>



                {/* <p className="kb-letter">E</p>
                <p className="kb-letter">T</p>
                <p className="kb-letter">S</p>
                <p className="kb-letter">W</p>
                <p className="kb-letter">O</p>
                <p className="kb-letter">R</p>
                <p className="kb-letter">K</p>
                <p className="kb-letter">T</p>
                <p className="kb-letter">O</p>
                <p className="kb-letter">G</p>
                <p className="kb-letter">E</p>
                <p className="kb-letter">T</p>
                <p className="kb-letter">H</p>
                <p className="kb-letter">E</p>
                <p className="kb-letter">R</p> */}
            </motion.div>
            
            <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="kb-form" action="#" method="post">
            <p class="kb-contact-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ullam at adipisci sit illo et minus quo numquam eveniet molestias fugiat illum asperiores tempora deleniti, velit ea labore esse cumque?</p>

                <input type="text" name="Name" id="Name" placeholder="Name" />
                <input type="email" name="email" id="email" placeholder="Email" />
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" ></textarea>
                <input type="submit" value="SUBMIT" />
            </motion.form>
            </div>
            <div className="kb-social-links">
                <p>Social links</p>
            <ul className="kb-social">
                <li classname="kb-icon"><a target="_blank" rel="noreferrer" className="kb-link" href="https://github.com/Karthikb777">GITHUB</a></li>
                <li classname="kb-icon"><a target="_blank" rel="noreferrer" className="kb-link" href="https://www.linkedin.com/in/karthik-hk">LINKEDIN</a></li>
                <li classname="kb-icon"><a target="_blank" rel="noreferrer" className="kb-link" href="https://www.instagram.com/karthikbaraati/">INSTAGRAM</a></li>
            </ul>
            </div>
            
            </div>
            </motion.div>
        </>
    );
}

export default Contact;
