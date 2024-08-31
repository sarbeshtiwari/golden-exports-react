import { Link } from "react-router-dom/dist";
import CareerPage from "./career_page";

export default function Career(){
    return(
        <>
        <div className="insideBanner">
            <picture>
                
                <img src="assets/images/career/banner-careers.jpg" className="img-fluid" alt="Responsive image"/>
            </picture>
            <div className="bannerContainer">
                <h2 className="h1">Careers</h2>
            </div>
        </div>

        <div className="breadcrumbContainer border-bottom">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Careers</li>
                </ol>
            </div>
        </div>
        <CareerPage/>
        </>
    );
}