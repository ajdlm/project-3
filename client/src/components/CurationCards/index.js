import React from "react";
import {Row, Col, Modal, ModalBody, Button, CardText} from "reactstrap";
import Carousel from "../../views/index-sections/Carousel";



function CurationCards(props) {
   
      const [modal1, setModal1] = React.useState(false);
      
    return (
        <div className="container">
             <Row>
                 <Col md-4>
            <div className="card">
                <div className="img-container">
                     <img alt={props.name} src={props.image[0].src} onClick={()=> setModal1(true)}/>
                     </div>
            </div>
            <Modal size = "lg" isOpen={modal1} toggle={() => setModal1(false)}>
            <ModalBody> 

                    <div  
                        className="image-container"
                        onClick={() => setModal1(true)}
                      >
                        <Carousel 
                      image={props.image}
                      
               ></Carousel>
                    
                    </div>
                    <br>
                    </br>
                   <h6>Details: </h6> {props.text}
                </ModalBody>
              </Modal>
            </Col>
            </Row>
        </div>
    );
}

export default CurationCards;