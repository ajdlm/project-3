/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

import { Card, CardImgOverlay } from "reactstrap";

// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header clear-filter"
        filter-color="white"
        style={{ backgroundColor: "light-grey" }}
      >
        <div
          className="page-header-image"
          ref={pageHeader}
          style={{ backgroundColor: "blue" }}
        ></div>

        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo" style={{ color: "black" }}>
              Portfolio Page Placeholder
            </h1>
          </div>
          <h6 className="category category-absolute">Designed by Project 3</h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
