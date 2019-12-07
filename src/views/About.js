import React from "react";

// Importing core components of the website
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// Importing components specific to the About page
import AboutSection from "components/AboutSection";

const About = () => {
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="main">
          <AboutSection />
        </div>
        <DarkFooter />
      </div>
    </>
  );
};

export default About;
