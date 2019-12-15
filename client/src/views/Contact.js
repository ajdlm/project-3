import React, { Component } from "react";

// Importing core components of the website
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// Importing components specific to the Contact page
import ContactForm from "components/ContactForm";

class Contact extends Component {
  navResponsive = () => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");

    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  };

  componentDidMount() {
    this.navResponsive();
  }

  componentDidUpdate() {
    this.navResponsive();
  }

  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="main">
            <ContactForm />
          </div>
          <DarkFooter />
        </div>
      </>
    );
  }
}

export default Contact;
