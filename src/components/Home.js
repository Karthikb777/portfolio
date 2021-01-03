import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


function Home() {
    return(
        <>   
        <section className="kb-landingPage">
            <motion.div className="kb-landingPage-bg">
            {/* <!-- <h3 className="kb-backgroundText kb-landingPage-bg">DEVELOPER</h3> --> */}
                <h3 className="kb-backgroundText dev1">DEV</h3>
                <h3 className="kb-backgroundText dev2">ELO</h3>
                <h3 className="kb-backgroundText dev3">PER</h3>
            </motion.div>
            <div className="kb-headerGrp">
                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                drag
                className="kb-header">Hi!</motion.h3>
                <div className="header-flex" style={{ display: "flex" }}>
                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                drag
                className="kb-header">I'm</motion.h3> 
                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                drag
                className="kb-header kb-name">Karthik,</motion.h3>
                </div>
                <div className="header-flex" style={{ display: "flex" }}>
                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                drag
                className="kb-header">I</motion.h3>
                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                drag
                className="kb-header">build</motion.h3>
                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                drag
                className="kb-header">stuff</motion.h3>
                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
                drag
                className="kb-header">with</motion.h3>
                <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                drag
                className="kb-header">code.</motion.h3>
                </div>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 }}
                className="kb-cta-btn">
                    <div className="kb-cta"><Link to='/about' className='kb-link'>Read about me</Link></div>
                    <div className="kb-cta-sm">or</div>
                    <div className="kb-cta"><Link to='/skills-projects' className='kb-link'>View projects</Link></div>
                </motion.div>
            </div>
        </section>
        </>
        );
}


export default Home;