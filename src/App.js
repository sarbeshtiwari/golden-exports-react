import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/widgets/header";
import Footer from "./components/widgets/footer";
import Home from "./components/main/home/home";
import AboutUs from "./components/main/about/aboutUs";
import OurIndustries from "./components/main/industries/ourIndustries";
import OurSolutions from "./components/main/solutions/ourSolutions";
import Career from "./components/main/career/career";
import ContactUS from "./components/main/contactUs/contactus";

function App() {
  return (
    <>
      <Router basename="/goldenExports">
        <Header />
        <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/industries" element={<OurIndustries />} />
          <Route path="/ourSolutions" element={<OurSolutions />} />
          <Route path="/careers-page" element={<Career />} />
          <Route path="/contact-us" element={<ContactUS />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
