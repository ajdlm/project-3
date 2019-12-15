import React from "react";
import "./style.css";

const CartHeader = () => {
  return (
    <div className="row mx-0 pt-4 px-3">
      <div className="col-1"></div>

      <div className="col-10 d-flex justify-content-center">
        <h2 className="mb-0">SHOPPING CART</h2>
      </div>

      <div className="col-1 d-flex align-items-end justify-content-end">
        <h5 className="mb-0">Price</h5>
      </div>
    </div>
  );
};

export default CartHeader;
