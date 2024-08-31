import { Link } from "react-router-dom/dist";
import IndustriesPage from "./industries_page";

export default function OurIndustries(){
    return (
        <>
        <div className="insideBanner">
            <picture>
                <img src="assets/images/Industries.jpg" className="img-fluid" alt="Responsive"/>
            </picture>
            <div className="bannerContainer">
                <h2 className="h1">Industries</h2>
            </div>
        </div>

        <div className="breadcrumbContainer border-bottom">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Our Industries</li>
                </ol>
            </div>
        </div>
        <IndustriesPage/>
        </>
    );
}