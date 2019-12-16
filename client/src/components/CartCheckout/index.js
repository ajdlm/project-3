import React from "react";
import "./style.css";

const CartCheckout = props => {
  return (
    <div className="row mx-0 mt-0 px-3">
      <div className="col-9"></div>

      <div className="col-3">
        <div className="py-3 text-center bg-dark text-white rounded">
          <h5 className="mb-0">
            Subtotal ({props.quantity}): ${props.totalPrice}
          </h5>

          <button className="btn">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;