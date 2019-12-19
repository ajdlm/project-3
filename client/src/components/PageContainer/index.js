import React from "react";
import "./style.css";

const PageContainer = props => {
  return <div className="pageContainer d-flex">{props.children}</div>;
};

export default PageContainer;
