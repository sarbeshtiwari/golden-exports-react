import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // For social media icons
import { AiOutlineMail } from 'react-icons/ai'; // For email icon
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const navigate = useNavigate();

  // Function to handle link clicks and scroll to top
  const handleLinkClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  // Styles for links
  const linkStyle = {
    color: '#fff', // Default text color
    textDecoration: 'none',
    borderRadius: '5px', // Rounded corners
    transition: 'color 0.3s, background-color 0.3s', // Smooth transition
  };

  // Hover styles
  const linkHoverStyle = {
    color: '#F7941E' // Golden color on hover
  };

  return (
    <section className="footer" id="footer" style={{ overflow: 'hidden' }}>
      <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
        <h1>Golden Exports</h1>
        <nav id="navbar" className="footer_navbar d-flex justify-content-center">
          <ul className="footer_ul" style={{ listStyle: 'none', padding: 0}}>
            <li>
              <Link 
                to="/" 
                style={{ ...linkStyle, ...(hoveredLink === '/' ? linkHoverStyle : {}) }}
                onMouseEnter={() => setHoveredLink('/')}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about-us" 
                style={{ ...linkStyle, ...(hoveredLink === '/about-us' ? linkHoverStyle : {}) }}
                onMouseEnter={() => setHoveredLink('/about-us')}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => handleLinkClick("/about-us")}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/industries" 
                style={{ ...linkStyle, ...(hoveredLink === '/industries' ? linkHoverStyle : {}) }}
                onMouseEnter={() => setHoveredLink('/industries')}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => handleLinkClick("/industries")}
              >
                Our Industries
              </Link>
            </li>
            <li>
              <Link 
                to="/ourSolutions" 
                style={{ ...linkStyle, ...(hoveredLink === '/ourSolutions' ? linkHoverStyle : {}) }}
                onMouseEnter={() => setHoveredLink('/ourSolutions')}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => handleLinkClick("/ourSolutions")}
              >
                Our Solutions
              </Link>
            </li>
            <li>
              <Link 
                to="/careers-page" 
                style={{ ...linkStyle, ...(hoveredLink === '/careers-page' ? linkHoverStyle : {}) }}
                onMouseEnter={() => setHoveredLink('/careers-page')}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => handleLinkClick("/careers-page")}
              >
                Careers
              </Link>
            </li>
            <li>
              <Link 
                to="/contact-us" 
                style={{ ...linkStyle, ...(hoveredLink === '/contact-us' ? linkHoverStyle : {}) }}
                onMouseEnter={() => setHoveredLink('/contact-us')}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => handleLinkClick("/contact-us")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="contact_social_links mt-3 mb-3">
          <a href="#" className="social-link facebook" style={{ color: '#fff' }}><FaFacebookF /></a>
          <a href="#" className="social-link instagram" style={{ color: '#fff' }}><FaInstagram /></a>
          <a href="#" className="social-link twitter" style={{ color: '#fff' }}><FaTwitter /></a>
          <a href="#" className="social-link linkedin" style={{ color: '#fff' }}><FaLinkedinIn /></a>
        </div>
        <div className="copyright">
          <p className="mb-0">
            <AiOutlineMail className="bottom_envelope_icon" />
            &nbsp;<a href="mailto:info@golden-exports.com" style={{ color: '#F7941E' }}>info@golden-exports.com</a>
          </p>
        </div>

        <div className="credits">
          <div className="circle">
            <div className="circle_one"></div>
            <div className="circle_one"></div>
            <div className="circle_one"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
