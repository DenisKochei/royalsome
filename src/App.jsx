import Navbar from "./pages/navbar.jsx";
import HomepageSlider from "./pages/heroslider.jsx";
import AboutUs from "./pages/about-us.jsx";
import Footer from "./pages/footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoreAboutUs from "./pages/more-about.jsx";
import WhatsAppButton from "./pages/whatsapp.jsx";
import InsuranceCovers from "./pages/covers.jsx";
import Claims from "./pages/claims.jsx";
import ContactUs from "./pages/contact.jsx";
import PolicySection from "./pages/policy.jsx";
import Services from "./pages/services.jsx";
function App() {
  return (
    <div className="font-sans">
      <Router>
        {/* Navbar always visible */}
        <Navbar />

        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <>
                <HomepageSlider />
                <WhatsAppButton />
                <AboutUs />
                <PolicySection/>
                <Services/>
                
                <Footer />
              </>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <>
                <MoreAboutUs />
                <Footer />
              </>
            }
          />

          {/* Insurance Page */}
          <Route
            path="/insurance"
            element={
              <>
                <InsuranceCovers />
                <Footer />
              </>
            }
          />
          <Route
            path="/claims"
            element={
              <>
                <Claims />
                
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ContactUs/>
                
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
