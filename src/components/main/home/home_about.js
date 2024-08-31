import React, { useEffect } from 'react';
import { Link } from "react-router-dom/dist";
import AOS from 'aos';


export default function HomeAbout() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // duration of animation
            once: false,    // whether animation should happen only once - while scrolling down
            mirror: true,   // whether elements should animate out while scrolling past them
        });
        AOS.refresh(); // to ensure AOS reinitializes if needed
    }, []);

    return (
        <>
            <section id="about" className="about" style={{ overflow: 'hidden' }}>
                <div className="container-fluid">
                    <div className="section-title" data-aos="fade-in" data-aos-delay="100">
                        <h2>who we are</h2>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1000">
                            <div className="about_content">
                                <p className="about_main_para">
                                    Established in 2007, Golden Exports marks its origins in the international trade landscape, reflecting over a decade of experience and growth in the industry
                                </p>
                                <p className="about_secPara">
                                    The company's headquarters are situated in Ningbo, Zhejiang, China, with a sizable workforce exceeding 70 employees. Additionally, it operates offices in strategic locations such as Suzhou, Hong Kong, India, and Dubai, facilitating efficient operations and client interactions across different regions.
                                </p>
                                <div className="certification_btton_box">
                                    <Link to="about-us" className="certification_btton">
                                        Read More <span className="bi bi-arrow-right"></span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1000">
                            <div className="about_img">
                                <div className="overlay"></div>
                                <img src="assets/images/about_us.webp" className="img-fluid" alt="" style={{ width: '100%' }} />
                                <Link to="#" className="glightbox play-btn" target="_blank" rel="noopener noreferrer"></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
