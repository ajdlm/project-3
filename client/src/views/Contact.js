import React, { Component } from "react";

// Importing core components of the website
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// Importing components specific to the Contact page
import ContactForm from "components/ContactForm";

// Importing stuff to make the SEND MESSAGE button populate
// the Mongo database with dummy data
import axios from "axios";

class Contact extends Component {
  addNewWork = newWork => {
    axios
      .post("/api/work", newWork)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  addWorkArray = array => {
    for (let i = 0; i < array.length; i++) {
      this.addNewWork(array[i]);
    }
  };

  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="main">
            <ContactForm addWorkArray={this.addWorkArray} />
          </div>
          <DarkFooter />
        </div>
      </>
    );
  }
}

export default Contact;
