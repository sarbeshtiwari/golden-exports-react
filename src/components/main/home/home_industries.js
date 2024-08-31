export default function HomeIndustries(){
    return(
        <>
        <section id="Industries" className="Industries" style={{ overflow: 'hidden' }}>
            <div className="container">
                <div className="section-title aos-init aos-animate" data-aos="fade-in" data-aos-delay="100">
                    <h2>INDUSTRIES WE SERVE IN</h2>
                    <p>
                        With years of hard work and dedication, Golden Exports has built expertise and connections in various
                        industries such as garments, furniture, and commodities. We aim to serve various markets and a wide
                        variety of customers.
                    </p>
                </div>

                <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                    <div className="row Industries_mainBox">
                        {industries.map((industry, index) => (
                            <div className="col-xl-3 col-md-6" key={index}>
                                <div className="Industries_item">
                                    <div className="icon">
                                        <img src={industry.image} alt={industry.name} />
                                    </div>
                                    <div className="indus_gradi">
                                        <p className="Industries_item_para">{industry.name}</p>
                                        <a href="#!" className="read-more">
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}


const industries = [
    {
        name: 'furniture',
        image: 'assets/images/Industries/furniture.webp',
    },
    {
        name: 'garments',
        image: 'assets/images/Industries/garments1.webp',
    },
    {
        name: 'commodity',
        image: 'assets/images/Industries/commodity.webp',
    },
    {
        name: 'tools',
        image: 'assets/images/Industries/tools.webp',
    },
];