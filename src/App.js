import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
// import TourList from "./TourList";
// import Footer from "./Footer";
// import WhyChooseUs from "./WhyChooseUs";
// import HowItWorks from "./HowItWorks";
import BlogPage from "./BlogPage";
import Homes from "./Homes";
// import Home from "./pages/Home";
import AboutUs from "./AboutUs";
// import Destinations from "./pages/Destinations";
import Contact from "./ContactUs";
import ToursPage from "./ToursPage";
import DealsPage from "./DealPage";
import TestimonialsPage from "./TestimonialsPage";
function App() {
  return (
    <Router>
      <Navbar />
      <br/><br/><br/><br/><br/><br/>
      {/* <TourList /> */}
      {/* <WhyChooseUs/> */}
      {/* <HowItWorks/> */}
      <Routes>
         <Route path="/" element={<Homes />} />
      <Route path="/home" element={<Homes />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/about" element={<AboutUs /> } />
      <Route path="/tours" element={<ToursPage /> } />
      <Route path="/deals" element={<DealsPage /> } />
      <Route path="/testimonials" element={<TestimonialsPage /> } />

        {/* <Route path="/" element={<Home />} />
      
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;