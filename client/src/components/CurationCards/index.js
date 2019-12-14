import React from "react";
import {Row} from "reactstrap";


function CurationCards(props) {
    function handleClick(e) {
        e.preventDefault();
        console.log("This image was clicked");
      }

    return (
        <div className="container">
             <Row>
            <div className="card">
                <div className="img-container">
                     <img alt={props.name} src={props.image} onClick={handleClick}/>
                     </div>
            </div>
            </Row>
        </div>
    );
}

export default CurationCards;