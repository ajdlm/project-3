import React from "react";

// Importing core components of the website
import PageContainer from "components/PageContainer";
import Wrapper from "components/Wrapper";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Main from "components/Main";
import DarkFooter from "components/Footers/DarkFooter.js";

// Importing components specific to the About page
import AboutSection from "components/AboutSection";

const About = () => {
  React.useEffect(() => {
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    
    return function cleanup() {
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <PageContainer>
      <IndexNavbar />

      <Wrapper>
        <Main>
          <AboutSection />
        </Main>
      </Wrapper>

      <DarkFooter />
    </PageContainer>
  );
};

export default About;
