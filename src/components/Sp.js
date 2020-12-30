import React from 'react';
import { motion } from 'framer-motion';

function Sp() {
    return(
        <>
            <motion.div animate={{ x: 0 }}
             transition={{ duration: 2 }}
             className="kb-sp">
            <div class="wrapper">
                {/* <!-- <h3 class="kb-header-small">SKILLS AND PROJECTS</h3> */}

                {/* <p class="kb-header-align-center">UI designer and full stack web developer</p> */}
                {/* <p class="kb-content-center">I specialize in creating apps and websites with functional interfaces. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae reprehenderit, vero dignissimos voluptate esse obcaecati. Fugiat, ipsa? Illum enim cum iure aliquid non! Distinctio possimus veritatis maiores dignissimos accusantium voluptate.</p> --> */}

                <h3 class="kb-header-small">MY SKILLS</h3>
                <p class="kb-skills-text">HTML5 <span class="kb-divider">/</span> CSS3 <span class="kb-divider">/</span> JAVASCRIPT <span class="kb-divider">/</span> NODEJS <span class="kb-divider">/</span> REACT <span class="kb-divider">/</span> PYTHON <span class="kb-divider">/</span> DJANGO <span class="kb-divider">/</span> JAVA <span class="kb-divider">/</span> EXPRESS <span class="kb-divider">/</span> BOOTSTRAP</p>

                <div class="kb-skills">
                    <div class="kb-skills-skill">
                        <i class="devicon-html5-plain-wordmark kb-colored"></i>
                    </div>
                    <div class="kb-skills-skill">
                        <i class="devicon-css3-plain-wordmark kb-colored"></i>
                    </div>
                    <div class="kb-skills-skill">
                        <i class="devicon-javascript-plain kb-colored"></i>
                    </div>
                    <div class="kb-skills-skill">
                        <i class="devicon-nodejs-plain-wordmark kb-colored"></i>
                    </div>
                    <div class="kb-skills-skill">
                        <i class="devicon-react-original kb-colored"></i>
                    </div>
                    <div class="kb-skills-skill">
                        <i class="devicon-python-plain kb-colored"></i>
                    </div>
                    <div class="kb-skills-skill">
                        <i class="devicon-django-plain-wordmark kb-colored"></i>
                    </div>
                    <div class="kb-skills-skill">
                        <i class="devicon-java-plain kb-colored"></i>
                       
                    </div>
                    
                    <div class="kb-skills-skill">
                        <i class="devicon-express-original kb-colored"></i>
                    </div>
                    <div class="kb-skills-skill">
                        <i class="devicon-bootstrap-plain kb-colored"></i>
                    </div> 
                </div>
                <p class="kb-content-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repudiandae mollitia dolorum, velit blanditiis iure dicta fugiat nemo ut corporis ipsum ipsa harum perspiciatis vitae atque laudantium? Impedit, ab quos.</p>
                <h3 class="kb-header-small">PROMINENT PROJECTS</h3>
                <div class="kb-projects">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi esse mollitia ratione quos corporis vitae doloribus voluptatibus vel aperiam, inventore fugiat provident est nihil, cum quam totam! Consequatur, voluptatum blanditiis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi esse mollitia ratione quos corporis vitae doloribus voluptatibus vel aperiam, inventore fugiat provident est nihil, cum quam totam! Consequatur, voluptatum blanditiis.</p>
                </div>
            </div>
            </motion.div>
        </>
    );
}

export default Sp;