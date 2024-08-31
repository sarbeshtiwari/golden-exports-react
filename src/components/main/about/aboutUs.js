import { Link } from "react-router-dom/dist";
import AboutUsPresence from "./aboutUs_presence";
import AboutUsSolutions from "./aboutUs_solutions";

export default function AboutUs() {
    return (
        <>
        <div className="insideBanner">
		<picture>
			
			<img src="assets/images/about-us.webp" className="img-fluid" alt="Responsive"/>
		</picture>
		<div className="bannerContainer">
			<h2 className="h1">About Us</h2>
		</div>
	</div>

	<div className="breadcrumbContainer border-bottom">
		<div className="container">
			<ol className="breadcrumb">
				<li className="breadcrumb-item"><Link to="/">Home</Link></li>
				<li className="breadcrumb-item active" aria-current="page">About Us</li>
			</ol>
		</div>
	</div>
    <AboutUsSolutions/>
    <AboutUsPresence/>
        </>
    );
}