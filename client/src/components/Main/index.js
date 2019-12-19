import React from "react";
import "./style.css";

const Main = props => {
  return <div className="main d-flex">{props.children}</div>;
}

export default Main;