import { Link } from "react-router-dom/dist";
import OurSolutionsPage from "./ourSolution_page";

export default function OurSolutions(){
    return(
        <>
        <div className="insideBanner">
            <picture>
               
                <img src="assets/images/solution.webp" className="img-fluid" alt="Responsive image"/>
            </picture>
            <div className="bannerContainer">
                <h2 className="h1">Solutions</h2>
            </div>
        </div>

        <div className="breadcrumbContainer border-bottom">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Our Solutions</li>
                </ol>
            </div>
        </div>
        <OurSolutionsPage/>
        </>
    );

}