import React from "react";
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
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);


  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="section section-about-us">
          <Container>

            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row id="spring">
              <Col md="4">
                  <div
                    className="image-container"
                    onClick={() => setModal1(true)}
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Tian3.jpg") + ")"
                    }}
                  >
                  </div>
              </Col>
              <Col md="4">
                  <div
                    className="image-container"
                    onClick={() => setModal2(true)}
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Tian1.jpg") + ")",
                    }}
                  >

                  </div>
              </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/Tian2.jpg") + ")"
                      }}
                  >

                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/Tian3.jpg") + ")"
                      }}
                  >

                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/Tian1.jpg") + ")",
                      }}
                  >

                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/Tian2.jpg") + ")"
                      }}
                  >

                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/Tian3.jpg") + ")"
                      }}
                  >

                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/Tian1.jpg") + ")",
                      }}
                  >

                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/Tian2.jpg") + ")"
                      }}
                  >

                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/Tian3.jpg") + ")"
                      }}
                  >

                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/Tian1.jpg") + ")",
                      }}
                  >

                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/Tian2.jpg") + ")"
                      }}
                  >

                  </div>
                </Col>
              </Row>
              {/******************************************************************/}
              <Row id = "summer">
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  >

                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                      }}
                  >

                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  >

                  </div>
                </Col>
              </Row>
              {/******************************************************************/}
              <Row id = "autumn">
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
              </Row>
              {/******************************************************************/}
              <Row id = "winter">
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
              </Row>
              {/******************************************************************/}
              <Row>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
              </Row>
              {/******************************************************************/}

              <Row>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
              </Row>

              <Row>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
              </Row>

              <Modal size = "lg" isOpen={modal1} toggle={() => setModal1(false)}>
                <ModalBody>
                    <div
                        className="image-container"
                        onClick={() => setModal1(true)}
                        style={{
                          backgroundImage:
                              "url(" + require("assets/img/Tian3.jpg") + ")",
                          height: "45em"
                        }}
                    ></div>
                </ModalBody>
              </Modal>

              <Modal size = "lg" isOpen={modal2} toggle={() => setModal2(false)}>
                <ModalBody>
                  <div
                      className="image-container"
                      onClick={() => setModal1(true)}
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/Tian1.jpg") + ")",
                        height: "45em"
                      }}
                  ></div>
                </ModalBody>
              </Modal>

            </div>
          </Container>
        </div>

        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;
