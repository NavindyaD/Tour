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
import Hello from "./hello"; // the component for hello.js
import Bye from "./bye";     // the component for bye.js
import Buy from './Buy';
import FiveDayTrip from "./5daytrip";
function App() {
  return (
    <Router>
      <Navbar />
      <br/><br/><br/><br/><br/><br/>
      {/* <TourList /> */}
      {/* <WhyChooseUs/> */}
      {/* <HowItWorks/> */}
      <Routes>
        <Route path="/Tour" element={<Homes />} />
      <Route path="/home" element={<Homes />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/about" element={<AboutUs /> } />
      <Route path="/tours" element={<ToursPage /> } />
      <Route path="/deals" element={<DealsPage /> } />
      <Route path="/testimonials" element={<TestimonialsPage /> } />
 <Route path="/hello" element={<Hello />} />
        <Route path="/bye" element={<Bye />} />
         <Route path="/buy" element={<Buy />} />
         <Route path="/5daytrip" element={<FiveDayTrip />} />
        {/* <Route path="/" element={<Home />} />
      
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;