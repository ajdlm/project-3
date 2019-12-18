import React from "react";

// Importing core components of the website
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// Importing components specific to the About page
import AboutSection from "components/AboutSection";

const About = () => {
  return (
    <div
      className="d-flex"
      style={{ minHeight: "100vh", flexDirection: "column" }}
    >
      <div className="wrapper d-flex" style={{ flex: "1", flexDirection: "column"  }}>
        <IndexNavbar />
        <div className="main d-flex" style={{ flex: "1", flexDirection: "column"}}>
          <AboutSection />
        </div>
      </div>
      <DarkFooter />
    </div>
  );
};

export default About;
