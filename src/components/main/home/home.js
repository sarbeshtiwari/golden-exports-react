import React from 'react';
import HomeAbout from './home_about';
import HomeIndustries from './home_industries';
import HomeOurSolution from './home_ourSolutions';
import HomeOurPresence from './home_ourPresence';

export default function Home() {
    return (
        <>
            <section id="hero" className="hero" style={{ overflow: 'hidden' }}>
                <div className="video-container">
                    <video
                        width="100%"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="assets/images/poster.webp"
                    >
                        <source src="assets/vdo/GOLDEN-EXPORTS.mp4" type="video/mp4" />
                        {/* <source src="assets/vdo/GOLDEN EXPORTS.mp4.ogg" type="video/ogg" /> */}
                    </video>
                </div>
            </section>
            <HomeAbout/>
            <HomeIndustries/>
            <HomeOurSolution/>
            <HomeOurPresence/>
        </>
    );
}
