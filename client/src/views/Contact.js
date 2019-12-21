import React, { Component } from "react";
import axios from "axios";

// Importing core components of the website
import PageContainer from "components/PageContainer";
import Wrapper from "components/Wrapper";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Main from "components/Main";
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

  state = {
    priceTotal: ""
  };
  componentDidMount() {
    this.navResponsive();

      axios
        .get("/api/total")
        .then(res => {
        if (res.data) {
        this.setState({ priceTotal: res.data });
      }
    })
    .catch(error => {
        console.log(error);
    });
  }

  componentDidUpdate() {
    this.navResponsive();
      axios
        .get("/api/total")
        .then(res => {
        if (res.data) {
        this.setState({ priceTotal: res.data });
      }
    })
    .catch(error => {
        console.log(error);
    });
  }

  resetForm = () => {
    document.getElementById("contactForm").reset();
  };

  submitForm = event => {
    event.preventDefault();

    const newMessage = {
      name: document.getElementById("name").value,

      email: document.getElementById("email").value,

      subject: document.getElementById("subject").value,

      message: document.getElementById("message").value
    };

    axios
      .post("/send-message", newMessage)
      .then(response => {
        console.log(response);

        this.resetForm();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <PageContainer>
        <IndexNavbar total = {this.state.priceTotal}/>

        <Wrapper>
          <Main>
            <ContactForm submitForm={this.submitForm} />
          </Main>
        </Wrapper>

        <DarkFooter />
      </PageContainer>
    );
  }
}

export default Contact;
