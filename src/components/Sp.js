import React from 'react';
import { motion } from 'framer-motion';
import {
    Link
  } from 'react-router-dom';
import img1 from './img/covid19karLightScCropped.png';

function Sp() {
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
                        <i class="devicon-nodejs-plain-wordmark kb-colored"></i>
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
                class="kb-content-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae mollitia dolorum, velit blanditiis iure dicta fugiat nemo ut corporis ipsum ipsa harum perspiciatis vitae atque laudantium? Impedit, ab quos.</motion.p>
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
                            <p class="kb-header-small-non-center">COVID19KARNATAKA</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi esse mollitia ratione quos corporis vitae doloribus voluptatibus vel aperiam, inventore fugiat provident est nihil, cum quam totam! Consequatur, voluptatum blanditiis.</p>
                        </div>
                        <img className="kb-img img2" src={img1} alt="covid19karnataka"></img>
                        <div className="project2">
                            <p class="kb-header-small-non-center">YEET</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi esse mollitia ratione quos corporis vitae doloribus voluptatibus vel aperiam, inventore fugiat provident est nihil, cum quam totam! Consequatur, voluptatum blanditiis.</p>
                        </div>
                </motion.div>
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