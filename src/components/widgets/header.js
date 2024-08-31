import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './header.css';

export default function Header() {
    const [showModal, setShowModal] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth <= 1279 && window.innerHeight <= 857
    );

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 1279 && window.innerHeight <= 857);
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const handleMenuItemClick = () => {
        setMenuVisible(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header id="header" className={`header d-flex align-items-center fixed-top ${scrolled ? 'scrolled' : ''}`}>
                <div className="container container-md d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
                        <img src="assets/images/logo/final.png" alt="Logo" />
                    </Link>

                    <nav className={`main-navbar ${menuVisible ? 'd-none' : ''}`}>
                        <ul className="d-flex">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/industries">Our Industries</Link></li>
                            <li><Link to="/ourSolutions">Our Solutions</Link></li>
                        </ul>
                    </nav>

                    <div className={`mobile-menu ${menuVisible ? 'show' : ''}`}>
                        <span className="close-btn" onClick={toggleMenu}>
                            &times;
                        </span>
                        <ul>
                            <li><Link to="/" onClick={handleMenuItemClick}>Home</Link></li>
                            <li><Link to="/about-us" onClick={handleMenuItemClick}>About Us</Link></li>
                            <li><Link to="/industries" onClick={handleMenuItemClick}>Our Industries</Link></li>
                            <li><Link to="/ourSolutions" onClick={handleMenuItemClick}>Our Solutions</Link></li>
                            <li>
                                <Button variant="" onClick={() => { handleShow(); handleMenuItemClick(); }} className="text-dark">
                                    Enquiry
                                </Button>
                            </li>
                        </ul>
                    </div>

                    <div className="mobile-menu-overlay" style={{ display: menuVisible ? 'block' : 'none' }} onClick={toggleMenu}></div>

                    <div className="main-navbar">
                        <Button variant="link" onClick={handleShow} className="envelope_icon">
                            <i className="bi bi-envelope hero_envelope_icon"></i>
                        </Button>
                    </div>

                    {isSmallScreen && (
                        <button
                            tabIndex="1"
                            className={`mobile-nav-toggle ${menuVisible ? 'd-none' : 'd-flex'} mobile-nav-show mobile-navBg`}
                            onClick={toggleMenu}
                        >
                            <img src="./assets/images/menu_icon/menuWhite.png" width="25" alt="Menu" />
                        </button>
                    )}

                    <button
                        tabIndex="5"
                        className={`mobile-nav-toggle ${menuVisible ? 'd-flex' : 'd-none'} align-items-center justify-content-center`}
                        onClick={toggleMenu}
                    >
                        <i className="bi bi-x"></i>
                    </button>

                    {/* Back to Top Button */}
                    <button
                        id="Golden_myBtn"
                        title="Go to top"
                        style={{
                            display: scrolled ? 'block' : 'none',
                            position: 'fixed',
                            bottom: '20px',
                            right: '20px',
                            backgroundColor: '#F7941E',
                            border: 'none',
                            color: '#fff',
                            width: '45px',
                            height: '45px',
                            padding: '10px',
                            borderRadius: '5px', // Square button with rounded corners
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            cursor: 'pointer',
                            zIndex: 1000,
                        
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onClick={scrollToTop}
                    >
                        <i className="bi bi-chevron-up"></i>
                    </button>
                </div>
            </header>

            {/* Modal Code */}
            <Modal
                show={showModal}
                onHide={handleClose}
                centered
                size="lg"
                aria-labelledby="exampleModalLabel"
                className="envelope-icon-modal"
            >
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                            <div className="modal-img">
                                <img src="assets/images/pop-up.jpg" alt="Your Image" className="img-fluid" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="modal-content-box">
                                <Button type="button" className="btn-close" onClick={handleClose} aria-label="Close" />

                                <div className="modal-btn-box">
                                    <h1 className="modal-title get-in-touch-heading" id="exampleModalLabel">Get in touch</h1>
                                </div>

                                <div className="get-in-touch-box">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Name :"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-12 form-group mt-3">
                                                <input
                                                    type="number"
                                                    name="tel"
                                                    className="form-control"
                                                    id="tel"
                                                    placeholder="Phone :"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-12 form-group mt-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email Id :"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <select className="form-control" name="natur_query" id="natur_query" required>
                                                <option value="">Nature of Inquiry</option>
                                                <option value="general-feedback">General Feedback</option>
                                                <option value="existing-customers">Existing Customers</option>
                                                <option value="project-query">Project Query</option>
                                                <option value="partnership-associates">Partnership/Associates</option>
                                            </select>
                                        </div>
                                        <div className="contact_btn-modal mt-3">
                                            <button type="submit">SUBMIT</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
