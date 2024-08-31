import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import './home_solution.css';

export default function HomeOurSolution() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [maxHeight, setMaxHeight] = useState("0px");
    const contentRef = useRef(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        if (isExpanded) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setMaxHeight("0px");
        }
    }, [isExpanded]);

    return (
        <section id="Solutions" className="Solutions" style={{ overflow: 'hidden' }}>
            <div className="container aos-init aos-animate" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
                <div className="section-title aos-init aos-animate" data-aos="fade-in" data-aos-delay="100">
                    <h2 className="text-white">Our Solutions</h2>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="our_servicesContent">
                            <p className="our_services_fisrt">
                                Over the years, Golden Exports has diversified its product offerings. We began as a logistics
                                &amp; export company in 2007. After establishing connections and a position in the logistics
                                domain, we ventured into other sectors to showcase our versatility in meeting customer's demands.
                            </p>

                            <p className="d-sm-block d-none">
                                After recognizing growth opportunities, we diversified our services portfolio by foraying
                                into the manufacturing industry. Within a few years, we established ourselves as a leading
                                player in the manufacturing of outerwear and knitwear for men, women, and kids. Currently,
                                we are serving prominent yet diverse markets like Italy, France, Russia, and The United
                                States of America.
                            </p>

                            <div className="row g-0">
                                {solutions.map((solution, index) => (
                                    <div className={`col-lg-3 col-md-6 col-sm-6 col-6 ${solution.classes}`} key={index}>
                                        <div className="Solutions_iconsBox">
                                            <div className="icon">
                                                <img src={solution.image} className="img-fluid" alt={solution.alt} />
                                            </div>
                                            <h4><a href="#!">{solution.title}</a></h4>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div
                                id="Solutions_text"
                                ref={contentRef}
                                style={{
                                    maxHeight: maxHeight,
                                    overflow: "hidden",
                                    transition: "max-height 0.5s ease",
                                }}
                                className={isExpanded ? "slide-in" : "slide-out"}
                            >
                                <p>In 2020, we ventured into manufacturing hand tools and cabinets. We distribute our
                                    hand tools and cabinets across Europe to wholesalers, original equipment
                                    manufacturers (OEMs), and traditional brick-and-mortar stores.
                                </p>

                                <p>We also extended our reach to Saudi Arabia to deliver top-notch office furniture
                                    solutions. Our products are designed with great thought and attention to detail,
                                    ensuring they meet the highest standards of quality, functionality, and appeal.
                                </p>

                                <p>Currently, our focus is on establishing our place in International Commodity Trading.
                                    Golden Exports is exporting sugar from Brazil, aluminium &amp; quartz stone from India,
                                    and copper from Africa.
                                </p>

                                <p>Looking forward, we want to continue evolving while focusing on delivering
                                    unparalleled service and product quality.
                                </p>
                            </div>

                            <div className="btn-container d-sm-block d-none">
                                <button id="Solutions_toggle" className="Solutions_toggleBtn Solutions-expandBtn" onClick={toggleExpand}>
                                    <span className="expend_btn">{isExpanded ? 'COLLAPSE' : 'EXPAND'}</span>
                                    <span className={`bi ${isExpanded ? 'bi-chevron-up' : 'bi-chevron-down'} Expand-chevron-down`}></span>
                                </button>
                            </div>

                            <div className="global-read-moreBtn d-sm-none d-sm-block">
                                <Link className="read-more-btn" to="solutions-page.html">
                                    <span className="text">Read More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const solutions = [
    {
        title: 'logistic solutions',
        image: 'assets/images/Solutions/LOGISTIC_SOLUTIONS.png',
        alt: 'Logistic Solutions',
        classes: 'iconsBox-right iconsBox-bottom',
    },
    {
        title: 'wholesalers',
        image: 'assets/images/Solutions/wholesaler.png',
        alt: 'Wholesalers',
        classes: 'iconsBox-bottom',
    },
    {
        title: 'original equipment manufacturer (OEMs)',
        image: 'assets/images/Solutions/original_equipment.png',
        alt: 'OEMs',
        classes: 'iconsBox-right',
    },
    {
        title: 'traditional brick and mortar stores',
        image: 'assets/images/Solutions/brick-and-mortar.png',
        alt: 'Traditional Brick and Mortar Stores',
        classes: '',
    },
];
