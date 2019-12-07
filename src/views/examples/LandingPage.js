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
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

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

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="section section-about-us">
          <Container>

            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
              <Col md="4">
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Tian3.jpg") + ")"
                    }}
                  >
                    <Button
                        className="mr-1"
                        onClick={() => setModal1(true)}
                        style={{height: 1 + 'em'}}
                        style={{weight: 1 + 'em'}}
                        opacity= "1000"
                    >
                    </Button>
                  </div>
              </Col>
              <Col md="4">
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/Tian1.jpg") + ")",
                    }}
                  >
                    <Button
                        className="mr-1"
                        onClick={() => setModal1(true)}
                        style={{height: 1 + 'em'}}
                        style={{weight: 1 + 'em'}}
                        opacity= "1000"
                    >
                    </Button>
                  </div>
              </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/Tian2.jpg") + ")"
                      }}
                  >
                    <Button
                        className="mr-1"
                        onClick={() => setModal1(true)}
                        style={{height: 1 + 'em'}}
                        style={{weight: 1 + 'em'}}
                        opacity= "1000"
                    >
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div
                      className="image-container"
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  >
                    <Button
                        className="mr-1"
                        onClick={() => setModal1(true)}
                        style={{height: 1 + 'em'}}
                        style={{weight: 1 + 'em'}}
                        opacity= "1000"
                    >
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                      }}
                  >
                    <Button
                        className="mr-1"
                        onClick={() => setModal1(true)}
                        style={{height: 1 + 'em'}}
                        style={{weight: 1 + 'em'}}
                        opacity= "1000"
                    >
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  >
                    <Button
                        className="mr-1"
                        onClick={() => setModal1(true)}
                        style={{height: 1 + 'em'}}
                        style={{weight: 1 + 'em'}}
                        opacity= "1000"
                    >
                    </Button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md="4">
                  <div
                      className="image-container"
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
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
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
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
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
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
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
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
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg1.jpg") + ")",
                      }}
                  ></div>
                </Col>
                <Col md="4">
                  <div
                      className="image-container"
                      style={{
                        backgroundImage:
                            "url(" + require("assets/img/bg3.jpg") + ")",
                      }}
                  ></div>
                </Col>
              </Row>

              <Modal size = "lg" isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                      className="close"
                      type="button"
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                </div>
                <ModalBody>
                  <p size = "500px, 500px" className="image-container"
                     style={{
                       backgroundImage:
                           "url(" + require("assets/img/bg1.jpg") + ")",
                     }}>
                    Far far away, behind the word mountains, far from
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                  </p>
                </ModalBody>
              </Modal>

            </div>
          </Container>
        </div>

        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
