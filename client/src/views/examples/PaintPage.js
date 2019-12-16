import React, { Component } from "react";
import axios from "axios";
// reactstrap components
import {
  Modal,
  ModalBody,
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col, CardDeck
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import PaintCard from "components/PaintCard";

class PaintPage extends Component {
    PaintTest = () => {
      document.body.classList.add("landing-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      return function cleanup() {
        document.body.classList.remove("landing-page");
        document.body.classList.remove("sidebar-collapse");
      };
    }

  state = {
    spring: [],
    summer: [],
    autumn: [],
    winter: []
  }

  componentDidMount() {
    axios
      .get("/api/paint")
      .then(res => {
        const NewArray = res.data;
        let Nspring = [];
        let Nsummer = [];
        let Nautumn = [];
        let Nwinter = [];
        console.log(NewArray[0]);
        for (let i = 0; i < NewArray.size; i ++)
        {
          if (NewArray[i].series === "spring")
          {
            Nspring.push(NewArray[i]);
          }
          else if (NewArray[i].series === "summer")
          {
            Nsummer.push(NewArray[i]);
          }
          else if (NewArray[i].series === "autumn")
          {
            Nautumn.push(NewArray[i]);
          }
          else if (NewArray[i].series === "winter")
          {
            Nwinter.push(NewArray[i]);
          }
        }
        console.log (Nspring);
        this.setState({spring: Nspring, summer: Nsummer, autumn: Nautumn, winter: Nwinter});

      }).catch(error => {
      console.log(error);
    })
    this.PaintTest();
  }

  componentDidUpdate() {
    this.PaintTest();
  }

  render() {
    return (
      <>
        <ExamplesNavbar/>
        <div className="wrapper">
          <div className="section section-about-us">
            <Container>

              <div className="separator separator-primary"></div>
              <div className="section-story-overview">
                <Row id="spring">
                  <CardDeck>
                    {this.state.spring.map(springImage =>
                      <Col md='4'>
                        <div
                          className="image-container">
                          <PaintCard
                            id={springImage._id}
                            image={springImage.imageUrls}
                          />
                        </div>
                      </Col>
                    )}
                  </CardDeck>
                </Row>
                {/******************************************************************/}
                <Row id="summer">
                  <CardDeck>
                    {this.state.summer.map(summerImage =>
                      <Col md='4'>
                        <div
                          className="image-container">
                          <PaintCard
                            id={summerImage._id}
                            image={summerImage.imageUrls}
                          />
                        </div>
                      </Col>
                    )}
                  </CardDeck>
                </Row>
                {/******************************************************************/}
                <Row id="autumn">
                  <CardDeck>
                    {this.state.autumn.map(autumnImage =>
                      <Col md='4'>
                        <div
                          className="image-container">
                          <PaintCard
                            id={autumnImage._id}
                            image={autumnImage.imageUrls}
                          />
                        </div>
                      </Col>
                    )}
                  </CardDeck>
                </Row>
                {/******************************************************************/}
                <Row id="winter">
                  <CardDeck>
                    {this.state.winter.map(winterImage =>
                      <Col md='4'>
                        <div
                          className="image-container">
                          <PaintCard
                            id={winterImage._id}
                            image={winterImage.imageUrls}
                          />
                        </div>
                      </Col>
                    )}
                  </CardDeck>
                </Row>
                {/******************************************************************/}

              </div>
            </Container>
          </div>

          <DarkFooter/>
        </div>
      </>
    );
    }
}
export default PaintPage;
