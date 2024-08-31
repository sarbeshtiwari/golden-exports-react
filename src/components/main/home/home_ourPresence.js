import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './home_presence.css'; // Ensure this file is imported after slick carousel styles

const HomeOurPresence = () => {
  const settings = {
    dots: true,
    
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    // customPaging: (i) => (
    //   <div className="custom-dot"></div>
    // ),
  };

  return (
    <section id="OUR_PRESENCE" className="OUR_PRESENCE" style={{ overflow: 'hidden' }}>
      <div className="container">
        <div className="section-title aos-init aos-animate" data-aos="fade-in" data-aos-delay="100">
          <h2>OUR PRESENCE</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cupiditate ullam numquam, enim
            asperiores earum, magni reprehenderit iste tempore dolorem nostrum quae,
            asperiores earum, magni reprehenderit iste culpa repellendus consectetur corrupti.
          </p>
        </div>

        <div className="row">
          <Slider {...settings}>
            <div className="PRESENCE_box">
              <div className="text-center">
                <div className="PRESENCE_img">
                  <img src="assets/images/OUR_PRESENCE/Italy.webp" alt="Italy" />
                </div>
                <h2>Italy</h2>
              </div>
            </div>

            <div className="PRESENCE_box">
              <div className="text-center">
                <div className="PRESENCE_img">
                  <img src="assets/images/OUR_PRESENCE/France.webp" alt="France" />
                </div>
                <h2>France</h2>
              </div>
            </div>

            <div className="PRESENCE_box">
              <div className="text-center">
                <div className="PRESENCE_img">
                  <img src="assets/images/OUR_PRESENCE/Russia.webp" alt="Russia" />
                </div>
                <h2>Russia</h2>
              </div>
            </div>

            <div className="PRESENCE_box">
              <div className="text-center">
                <div className="PRESENCE_img">
                  <img src="assets/images/OUR_PRESENCE/USA.webp" alt="USA" />
                </div>
                <h2>USA</h2>
              </div>
            </div>

            <div className="PRESENCE_box">
              <div className="text-center">
                <div className="PRESENCE_img">
                  <img src="assets/images/OUR_PRESENCE/Brazil.webp" alt="Brazil" />
                </div>
                <h2>Brazil</h2>
              </div>
            </div>

            <div className="PRESENCE_box">
              <div className="text-center">
                <div className="PRESENCE_img">
                  <img src="assets/images/OUR_PRESENCE/india.webp" alt="India" />
                </div>
                <h2>India</h2>
              </div>
            </div>

            <div className="PRESENCE_box">
              <div className="text-center">
                <div className="PRESENCE_img">
                  <img src="assets/images/OUR_PRESENCE/Africa.webp" alt="Africa" />
                </div>
                <h2>Africa</h2>
              </div>
            </div>

            <div className="PRESENCE_box">
              <div className="text-center">
                <div className="PRESENCE_img">
                  <img src="assets/images/OUR_PRESENCE/Saudi_Arabia.webp" alt="Saudi Arabia" />
                </div>
                <h2>Saudi Arabia</h2>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeOurPresence;
