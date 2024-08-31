export default function OurSolutionsPage() {
    return(
        <>
         <section id="SolutionsPage" className="SolutionsPage">

            <div className="container aos-init aos-animate" data-aos="fade-up">

                <div className="section-title aos-init aos-animate" data-aos="fade-in" data-aos-delay="100">
                    <h2>Our Solutions</h2>
                </div>

                <div className="row g-0 mt-3">
                    
                    <div className="col-lg-12">
                        <div className="content d-flex flex-column justify-content-center h-100">
                            <h3 className="offeringsHead">Over the years, Golden Exports has diversified its product offerings.
                            </h3>
                            <p>
                                We began as a
                                logistics & export company in 2007. After establishing connections and a position in the
                                logistics domain, we ventured into other sectors to showcase our versatility in meeting
                                customer's demands.
                            
                                After recognizing growth opportunities, we diversified our services portfolio by foraying
                                into the manufacturing industry. Within a few years, we established ourselves as a leading
                                player in the manufacturing of outerwear and knitwear for men, women, and kids. Currently,
                                we are serving prominent yet diverse markets like Italy, France, Russia, and The United
                                States of America.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            
            </section>





            <section className="SolutionsPage-offerings">

            <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="row align-items-xl-center gy-5">

                    <div className="col-xl-5 content">
                       
                        <h2>Our Diverse Product Offerings</h2>
                        <p className="lead">Explore our range of products and services that showcase our versatility and
                            commitment to excellence.</p>
                    </div>

                    <div className="col-xl-7">
                        <div className="row gy-4 icon-boxes">

                            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box">
                                   
                                    <div className="offeringscardImg">
                                        <img src="assets/images/SolutionsPage-offerings/Manufacturing.png" alt="Icon"/>
                                    </div>
                                    <h3>Manufacturing</h3>
                                    <p>Leading manufacturer of outerwear and knitwear for men, women, and kids, serving
                                        markets in Italy, France, Russia, and USA.</p>
                                </div>
                            </div>

                            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box">
                                 
                                    <div className="offeringscardImg">
                                        <img src="assets/images/SolutionsPage-offerings/Fashion-Industry.png" alt="Icon"/>
                                    </div>
                                    <h3> Fashion Industry Partnerships</h3>
                                    <p>Collaboration with prominent players like Diesel's Ireland Division, demonstrating
                                        expertise and commitment to fashion excellence.</p>
                                </div>
                            </div>



                            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon-box">
                                    <div className="offeringscardImg">
                                        <img src="assets/images/SolutionsPage-offerings/Hand-Tools.png" alt="Icon"/>
                                    </div>
                                   
                                    <h3>Hand Tools and Cabinets</h3>
                                    <p>Distribution of high-quality hand tools and cabinets across Europe to wholesalers,
                                        OEMs, and retail stores.</p>
                                </div>
                            </div>

                            <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon-box">
                                    <div className="offeringscardImg">
                                        <img src="assets/images/SolutionsPage-offerings/Office-Furniture.png" alt="Icon"/>
                                    </div>
                                  
                                    <h3>Office Furniture Solutions</h3>
                                    <p>Top-notch office furniture solutions delivered to Saudi Arabia, designed with
                                        meticulous attention to detail and functionality.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            </section>
        </>
    );
}