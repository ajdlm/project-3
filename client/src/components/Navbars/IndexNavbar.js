import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  let NavTotal = props.total;
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            {/*change the link to home page*/}
            <NavbarBrand
              href="/index"
              id="navbar-brand"
              style={{ color: "black" }}
            >
              Suyao Tian
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Homepage
            </UncontrolledTooltip>
            {/******************************start toggle (small screen)*/}
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            {/******************************end toggle (small screen)*/}
            <Nav navbar>
              {/*download-section is in views/index-sections/Download.js  will jump to the section in the same page below*/}
              <NavItem>
                {/*change route*/}
                <NavLink href="/about">
                  <p style={{ color: "black" }}>About</p>
                </NavLink>
              </NavItem>
              {/*************************end of download button*/}

              {/*************************start of component button(drop down)*/}
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href=""
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <p style={{ color: "black" }}>Work</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/PaintPage" tag={Link}>
                    Paintings
                  </DropdownItem>
                  <DropdownItem
                    href="https://www.moderncover.net/"
                    target="_blank"
                  >
                    Gloves
                  </DropdownItem>
                  <DropdownItem to="/curationpage" tag={Link}>
                    Curation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/*************************end of component button(drop down)*/}

              {/*************************************start instagram button*/}
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/suyaotian/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i
                    className="fab fa-instagram"
                    style={{ color: "black" }}
                  ></i>
                  <p className="d-lg-none d-xl-none" style={{ color: "black" }}>
                    Instagram
                  </p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow me on Instagram
                </UncontrolledTooltip>
              </NavItem>
              {/****************************************end instagram button*/}
              <NavItem>
                {/*change route*/}
                <NavLink href="/contact">
                  <p style={{ color: "black" }}>Contact</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/Shopping-Cart"
                  id="cart-tooltip"

                >
                  <i
                    className="fas fa-shopping-cart"
                    style={{ color: "black" }}
                  ></i>
                  <p className="d-lg-none d-xl-none" style={{ color: "black" }}>
                    Shopping Cart
                  </p>
                </NavLink>
                <UncontrolledTooltip target="#cart-tooltip">
                  View Shopping Cart
                </UncontrolledTooltip>
              </NavItem>
  <NavItem>
  <p style={{color:"black"}}>{NavTotal}</p>
  </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
