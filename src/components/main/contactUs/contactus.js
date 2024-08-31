import { Link } from "react-router-dom/dist";
import ContactUsForm from "./contactusForm";

export default function ContactUS() {
    return (
        <>
            <div className="insideBanner">
            <picture>
                
                <img src="assets/images/contact-us.jpg" className="img-fluid" alt="Responsive image"/>
            </picture>
            <div className="bannerContainer">
                <h2 className="h1">Contact Us</h2>
            </div>
        </div>

        <div className="breadcrumbContainer border-bottom">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                </ol>
            </div>
        </div>
        <ContactUsForm/>
        </>
    );
}