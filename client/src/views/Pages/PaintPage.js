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
      document.body.classList.add("PaintPage");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      return function cleanup() {
        document.body.classList.remove("PaintPage");
        document.body.classList.remove("sidebar-collapse");
      };
    }

  state = {
      cookieText: "empty",
    spring: [],
    summer: [],
    autumn: [],
    winter: []
  }

  componentDidMount() {



  axios.get("/api/work/spring")
      .then(res => {
        const NewArray = res.data;
        this.setState({spring: NewArray});
      }).catch(error => {
      console.log(error);
    })

    axios.get("/api/work/summer")
      .then(res => {
        const NewArray = res.data;
        this.setState({summer: NewArray});
      }).catch(error => {
      console.log(error);
    })

    axios.get("/api/work/autumn")
      .then(res => {
        const NewArray = res.data;
        this.setState({autumn: NewArray});
      }).catch(error => {
      console.log(error);
    })

    axios.get("/api/work/winter")
      .then(res => {
        const NewArray = res.data;
        this.setState({winter: NewArray});
      }).catch(error => {
      console.log(error);
    })
  }

  componentDidUpdate() {
    this.PaintTest();
  }

  render() {
    return (
      <>
        <ExamplesNavbar/>
        <div className="wrapper" style={{margin: "72px 0"}}>

            <Container>
              <div id = "spring">
               <CardDeck>
                    {this.state.spring.map(springImage =>
                      <Col md='4'>
                        <div
                          className="image-container">
                           <p>  </p>

                          <PaintCard
                            id={springImage._id}
                            image={springImage}
                          />
                        </div>
                      </Col>
                    )}
                  </CardDeck>
              </div>
                {/******************************************************************/}
                <div id = "summer">
                  <CardDeck>
                    {this.state.summer.map(summerImage =>
                      <Col md='4'>
                        <div
                          className="image-container">
                         <p>  </p>

                          <PaintCard
                            id={summerImage._id}
                            image={summerImage}
                          />
                        </div>
                      </Col>
                    )}
                  </CardDeck>
                </div>
                {/******************************************************************/}
              <div id = "autumn">
                  <CardDeck>
                    {this.state.autumn.map(autumnImage =>
                      <Col md='4'>
                        <div
                          className="image-container">
                          <PaintCard
                            id={autumnImage._id}
                            image={autumnImage}
                          />
                       <p>  </p>

                        </div>
                      </Col>
                    )}
                  </CardDeck>
              </div>
                {/******************************************************************/}
              <div id = "winter">
                  <CardDeck>
                    {this.state.winter.map(winterImage =>
                      <Col md='4'>
                        <div
                          className="image-container">
                            <p>  </p>

                          <PaintCard
                            id={winterImage._id}
                            image={winterImage}
                          />
                        </div>
                      </Col>
                    )}
                  </CardDeck>
              </div>
                {/******************************************************************/}

            </Container>
          </div>

          <DarkFooter/>
          </>
    );
    }
}
export default PaintPage;
