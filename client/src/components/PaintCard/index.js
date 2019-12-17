import React from "react";
import {Row, Col, Modal, ModalBody, Button} from "reactstrap";


function PaintCard(props) {

  const [modal, setModal] = React.useState(false);

  return (
    <div className="container">
      <Row>
        <Col md-4>
          <div className="card">
            <div className="img-container">
              <img alt={props.name} src={props.image[0]} onClick={()=> setModal(true)}/>
            </div>
          </div>
          <Modal size = "lg" isOpen={modal} toggle={() => setModal(false)}>
            <ModalBody>
              <div
                className="image-container"
                onClick={() => setModal(true)}
              >
                <img src= {props.image[0]} alt="pic"></img>
              </div>
            </ModalBody>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}

export default PaintCard;