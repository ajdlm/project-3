import React, { Component } from "react";
import axios from "axios";


// reactstrap components
import {
  CardDeck,
  ButtonToggle,
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip, Modal, ModalBody
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import CurationCards from "components/CurationCards";
import CarouselSection from "views/index-sections/Carousel";
import Carousel from "../index-sections/Carousel.js";


class CurationPage extends Component {


  CurationTest = () => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");

    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }

  //Curation Images
  state = {
    curationArray: [],
    priceTotal: ""
  }
  componentDidMount() {
    axios
    .get("/api/work")
    .then(res => {
      const NewArray = res.data;
      console.log(NewArray);
      this.setState({curationArray: NewArray})

    }).catch(error => {
      console.log(error);
    })
    this.CurationTest();
  }

  componentDidUpdate() {
    this.CurationTest();

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

  render() {
    return (
      <>
        <IndexNavbar total = {this.state.priceTotal}/>
        <div className="wrapper">
          <div className="section section-about-us">
            <Container>
              <div className="separator separator-primary"></div>
              <CardDeck>
               {this.state.curationArray.map(curationImage =>
               <Col md='4'>
               <div
               className="image-container">
               <CurationCards
               id={curationImage._id}
               image={curationImage.imageUrls}
               text={curationImage.description}
               />

               </div>
               <p>  </p>
               </Col>

               )}
               </CardDeck>
               </Container>
          </div>

          <DarkFooter />
        </div>
      </>
    );
  }
}

export default CurationPage;
