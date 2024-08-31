import React, { useState } from 'react';

export default function ContactUsForm() {

  return ( 
  <section id="contact" className="contact" style={{ overflow: 'hidden' }}>
    <div className="container aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
      <div className="section-title aos-init aos-animate" data-aos="fade-in" data-aos-delay="100">
        <h2>Contact Us</h2>
      </div>

      <p className="contact_main_para">
        Do you want fast, reliable, and seamless shipping solutions for your business? If yes, then do get in touch with us.
      </p>

      <div className="row mt-3 d-flex justify-content-center">
        <div className="col-lg-8 col-12">
          <div className="info_box">
            <div className="row">
              <div className="col-md-4">
                <div className="row">
                  <div className="col-2">
                    <span className="contact-icon">
                      <img src="assets/images/contact/icon/location.png" alt="Location Icon" />
                    </span>
                  </div>
                  <div className="col-10">
                    <h3>Address :</h3>
                    <p>Gurgaon, India</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="row">
                  <div className="col-2">
                    <span className="contact-icon">
                      <img src="assets/images/contact/icon/telephone.png" alt="Phone Icon" />
                    </span>
                  </div>
                  <div className="col-10">
                    <h3>Phone Number: </h3>
                    <p>+91 9999 xxx xxx</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="row">
                  <div className="col-2">
                    <span className="contact-icon">
                      <img src="assets/images/contact/icon/email.png" alt="Email Icon" />
                    </span>
                  </div>
                  <div className="col-10">
                    <h3>Email Id :</h3>
                    <p>golden-export@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-12 sm-mt-5">
          <div className="get-in-touch-box">
            <div className="Get_in_touch mx-auto">
              <h2>Get in touch</h2>
            </div>

            <form>
              <div className="row">
                <div className="col-md-12 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Name :" required />
                </div>

                <div className="col-md-12 form-group mt-3">
                  <input type="number" name="tel" className="form-control" id="tel" placeholder="Phone :" required />
                </div>

                <div className="col-md-12 form-group mt-3">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Email Id :" required />
                </div>
              </div>

              <div className="form-group mt-3">
                <select className="form-control" name="natur_query" id="natur_query" required>
                  <option value="">Nature of Inquiry</option>
                  <option value="">General Feedback</option>
                  <option value="">Existing Customers</option>
                  <option value="">Project Query</option>
                  <option value="">Partnership/ Associates</option>
                </select>
              </div>

              <div className="contact_btn">
                <button type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>);
}
