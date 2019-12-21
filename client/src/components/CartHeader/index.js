import React from "react";
import "./style.css";
import {Button} from "reactstrap";


const CartHeader = () => {
  return (
    <div className="row cartRow mx-0 pt-3 px-3">
      <div className="col-3"><Button a href="/PaintPage" style={{backgroundColor:"black"}}>Go Back</Button> </div>

      <div className="col-6 d-flex align-items-end justify-content-center">
        <h2 className="mt-2 mb-0">SHOPPING CART</h2>
      </div>

      <div className="col-3 d-flex align-items-end justify-content-end">
        <h5 className="mb-0">Price</h5>
      </div>
    </div>
  );
};

export default CartHeader;
