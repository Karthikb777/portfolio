import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <>   
        <section className="kb-landingPage">
            <div className="kb-landingPage-bg">
            {/* <!-- <h3 className="kb-backgroundText kb-landingPage-bg">DEVELOPER</h3> --> */}
                <h3 className="kb-backgroundText dev1">DEV</h3>
                <h3 className="kb-backgroundText dev2">ELO</h3>
                <h3 className="kb-backgroundText dev3">PER</h3>
            </div>
            <div className="kb-headerGrp">
                <h3 className="kb-header">Hi!</h3>
                <h3 className="kb-header">I'm <span className="kb-header kb-name">Karthik</span>, </h3>
                <h3 className="kb-header">I build stuff with code.</h3>
                <div className="kb-cta-btn">
                    <div className="kb-cta"><Link to='/about' className='kb-link'>Read about me</Link></div>
                    <div className="kb-cta-sm">or</div>
                    <div className="kb-cta"><Link to='/contact' className='kb-link'>Contact me</Link></div>
                </div>
            </div>
        </section>
        </>
        );
}


export default Home;