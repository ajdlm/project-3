import React from "react";

// Importing core components of the website
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// Importing components specific to the Contact page
import ContactForm from "components/ContactForm"

const Contact = () => {
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
};

export default Contact;
