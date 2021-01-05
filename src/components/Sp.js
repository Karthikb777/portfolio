import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Link
  } from 'react-router-dom';
import img1 from './img/covid19karLightScCropped.png';
import img2 from './img/yeet.png';

function Sp() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return(
        <>
            <motion.div initial={{ x: '100vw' }}
             animate={{ x: 0 }}
             transition={{ duration: 0.6 }}
             className="kb-sp">
            <div class="wrapper">
                {/* <!-- <h3 class="kb-header-small">SKILLS AND PROJECTS</h3> */}

                {/* <p class="kb-header-align-center">UI designer and full stack web developer</p> */}
                {/* <p class="kb-content-center">I specialize in creating apps and websites with functional interfaces. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae reprehenderit, vero dignissimos voluptate esse obcaecati. Fugiat, ipsa? Illum enim cum iure aliquid non! Distinctio possimus veritatis maiores dignissimos accusantium voluptate.</p> --> */}

                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                class="kb-header-small">MY SKILLS</motion.h3>
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                class="kb-skills-text">HTML5 <span class="kb-divider">/</span> CSS3 <span class="kb-divider">/</span> JAVASCRIPT <span class="kb-divider">/</span> NODEJS <span class="kb-divider">/</span> REACT <span class="kb-divider">/</span> PYTHON <span class="kb-divider">/</span> DJANGO <span class="kb-divider">/</span> JAVA <span class="kb-divider">/</span> EXPRESS <span class="kb-divider">/</span> BOOTSTRAP</motion.p>

                <div class="kb-skills">
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:1.4}}
                    class="kb-skills-skill">
                        <i class="devicon-html5-plain-wordmark kb-colored"></i>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:1.5}}
                    class="kb-skills-skill">
                        <i class="devicon-css3-plain-wordmark kb-colored"></i>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:1.6}}
                    class="kb-skills-skill">
                        <i class="devicon-javascript-plain kb-colored"></i>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:1.7}}
                    class="kb-skills-skill">
                        <i class="devicon-nodejs-plain kb-colored"></i>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:1.8}}
                    class="kb-skills-skill">
                        <i class="devicon-react-original kb-colored"></i>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:1.9}}
                    class="kb-skills-skill">
                        <i class="devicon-python-plain kb-colored"></i>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:2}}
                    class="kb-skills-skill">
                        <i class="devicon-django-plain-wordmark kb-colored"></i>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:2.1}}
                    class="kb-skills-skill">
                        <i class="devicon-java-plain kb-colored"></i> 
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:2.2}}
                    class="kb-skills-skill">
                        <i class="devicon-express-original kb-colored"></i>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay:2.3}}
                    class="kb-skills-skill">
                        <i class="devicon-bootstrap-plain kb-colored"></i>
                    </motion.div> 
                </div>
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4 }}
                class="kb-content-center">My specialization is Full Stack Development. I'm also really proficient in Python. I use HTML5, CSS3, Javascript, React, Python and Django the most, and I'm capable of developing production ready code. I have learnt and used the other technologies like Nodejs and express for server side in small Projects, and I have also worked in Golang and Flutter.</motion.p>
                {/* <hr /> */}
                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                class="kb-header-small">PROMINENT PROJECTS</motion.h3>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6 }}
                class="kb-projects">
                        <img className="kb-img img1" src={img1} alt="covid19karnataka"></img>
                        <div className="project1">
                            <p class="kb-header-small-non-center"><a className="kb-link" target="_blank" rel="noreferrer" href="https://karthikb777.github.io/covid19karnataka/">COVID19KARNATAKA</a></p>
                            <p className="kb-content-left">This project was created because, I didn't have a quick and easy way to get detailed information of covid 19 statistics of my native state of Karnataka, India. This site is Built with Reactjs and gets the data from an open source API from covid19india.org. <br/><br />Made with: HTML5, CSS3, Javascript and ReactJS.<br /><br /> You can check out the site <a className="kb-link-logo" target="_blank" rel="noreferrer" href="https://karthikb777.github.io/covid19karnataka/">here.</a> <br /> The link to the github repository is <a target="_blank" rel="noreferrer" className="kb-link-logo" href="https://github.com/Karthikb777/covid19karnataka/">here.</a> </p>
                        </div>
                        <img className="kb-img img2" src={img2} alt="yeet"></img>
                        <div className="project2">
                            <p class="kb-header-small-non-center"><a className="kb-link" target="_blank" rel="noreferrer" href="https://kitcclub.herokuapp.com/">YEET</a></p>
                            <p className="kb-content-left">This project was created for students to download class notes and for teachers to upload their notes in a single place, and also to overcome some of the shortcomings of the services used by the teachers to share class notes, observed during the online lecture period. <br /><br /> Made with: HTML5, CSS3, Javascript for client side, Django for server side.
                            <br />
                            <br />
                            You can view the site <a className="kb-link-logo" target="_blank" rel="noreferrer" href="https://kitcclub.herokuapp.com/">here.</a>
                            </p>
                        </div>
                </motion.div>
                <motion.p className="kb-gh-link kb-content-center">Check out my github account for more projects. <a target="_blank" rel="noreferrer" className="kb-link-logo" href="https://github.com/Karthikb777/">Here's the link to my github account.</a></motion.p>
                <div className="kb-skills-text">
                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 2.7 }}
                     className=""><Link className='kb-link kb-nxtpg' to='/contact'>Get in touch {'>'} </Link></motion.div>
            </div></div>
            </motion.div>
        </>
    );
}

export default Sp;