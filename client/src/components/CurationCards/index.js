import React from "react";
import {Row, Col, Modal, ModalBody} from "reactstrap";


function CurationCards(props) {
   
      const [modal1, setModal1] = React.useState(false);
      
    return (
        <div className="container">
             <Row>
                 <Col md-4>
            <div className="card">
                <div className="img-container">
                     <img alt={props.name} src={props.image} onClick={()=> setModal1(true)}/>
                     </div>
            </div>
            <Modal size = "lg" isOpen={modal1} toggle={() => setModal1(false)}>
                <ModalBody>
                    <div
                        className="image-container"
                        onClick={() => setModal1(true)}
                      >
                    <img src= {props.image} alt="pic"></img>
                    </div>
                </ModalBody>
              </Modal>
            </Col>
            </Row>
        </div>
    );
}

export default CurationCards;