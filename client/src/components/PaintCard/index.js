import React from "react";
import {Row, Col, Modal, ModalBody, Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Label, Input} from "reactstrap";


function PaintCard(props) {

  const [modal, setModal] = React.useState(false);
  const unitPrice = props.image.price;
  let quantity = 1;

  function handleQuantityChange(e)
  {
    e.preventDefault();
    console.log(e.target.value);
  }
  function handleAddCart(e)
  {
    console.log(props.image.name + "\n" + unitPrice + "\n" + quantity);
  }

  return (
    <div className="container">
      <Row>
        <Col md-4>
          <div className="card">
            <div className="img-container">
              <img src={props.image.imageUrls[0].src} alt="pic" onClick={()=> setModal(true)}/>
            </div>
          </div>
          <Modal size = "lg" isOpen={modal} toggle={() => setModal(false)}>
            <ModalBody>
              <div
                className="image-container"
                onClick={() => setModal(true)}
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
                    <Button onClick = {handleAddCart}>Add to Cart</Button>
                  </CardBody>
                </Card>
              </div>
            </ModalBody>
          </Modal>
        </Col>
      </Row>
    </div>
  );
}

export default PaintCard;