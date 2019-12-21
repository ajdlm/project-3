import React from "react";
import {Row, Col, Modal, ModalBody, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Label, Input} from "reactstrap";
import axios from "axios";


function PaintCard(props) {

  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);

  const unitPrice = props.image.price;
  let quantity = 1;

  function handleQuantityChange(e)
  {
    e.preventDefault();
    console.log(e.target.value);
  }
  function handleAddCart() {
    axios.post("/api/user", props.image).then(function (response) {
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="container">
      <Row>
        <Col md-4>
          <div className="card">
            <div className="img-container">
              <img src={props.image.imageUrls[0].src} alt="pic" onClick={()=> setModal1(true)}/>
            </div>
          </div>
          <Modal size = "lg" isOpen={modal1} toggle={() => setModal1(false)}>
            <ModalBody>
              <div
                className="image-container"
                onClick={() => setModal1(true)}
              >
                <Card>
                  <CardImg top width="100%" src= {props.image.imageUrls[0].src} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{props.image.name}</CardTitle>
                    <CardSubtitle>{props.image.series} series</CardSubtitle>
                    <CardText>{props.image.description}</CardText>
                    <Label for="Select">Quantity</Label>
                    <Input type="select" name="select" id="Select" onChange={handleQuantityChange}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                    <Button onClick = {() => {handleAddCart(); setModal2(true)}}>Add to Cart</Button>
                    <Button href="/Shopping-Cart" style={{backgroundColor: "black"}}>View Cart</Button>

                  </CardBody>
                </Card>
              </div>
            </ModalBody>
          </Modal>

          <Modal modalClassName="modal-mini modal-info" toggle={() => setModal2(false)} isOpen={modal2}>
            <div className="modal-header justify-content-center">
              <div className="modal-profile">
                <i className="now-ui-icons users_circle-08"></i>
              </div>
            </div>
            <ModalBody>
              <p>Always have an access to your profile</p>
            </ModalBody>
            <div className="modal-footer">
              <Button className="btn-neutral" color="link" type="button" onClick={() => {setModal2(false); setModal1(false)}}>
                Close
              </Button>
            </div>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}

export default PaintCard;