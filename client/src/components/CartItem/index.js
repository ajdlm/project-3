import React from "react";
import "./style.css";

const CartItem = props => {
  return (
    <div>
      <div className="hrDiv px-4 py-2">
        <hr className="border rounded my-2" />
      </div>

      <div className="row cartRow p-3 mt-0 mx-0">
        <div className="col-3">
          <img
            className="aboutPortrait img-fluid my-1"
            src={props.itemInfo.imageUrls[0].src}
            alt={props.itemInfo.name}
          />
        </div>

        <div className="col-8 d-flex align-items-center">
          <div>
            <h4 className="mt-0">{props.itemInfo.name.toUpperCase()}</h4>

            <h5 className="seriesName">
              {props.itemInfo.series.toUpperCase()} COLLECTION
            </h5>

            <p className="cartText">{props.itemInfo.description}</p>

            <button
              className="btn mt-0"
              onClick={() => props.deleteItem(props.itemInfo)}
            >
              REMOVE
            </button>
          </div>
        </div>

        <div className="col-1 d-flex justify-content-end">
          <h5>${props.itemInfo.price}</h5>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
