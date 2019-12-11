import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
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

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
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
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg" >
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={e => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown" >
              <DropdownItem href="/about" onClick={e => e.preventDefault()} style={{ color: "black" }}>
                About
              </DropdownItem>
              <DropdownItem href="/contact" onClick={e => e.preventDefault()}>
                Contact
              </DropdownItem>
              <DropdownItem href="https://www.instagram.com/suyaotian/" onClick={e => e.preventDefault()}>
                Instagram
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
              href="/index"
              target="_blank"
              id="navbar-brand"
              style={{ color: "black" }}
            >
              Brand Logo
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Go to Homepage
            </UncontrolledTooltip>
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
            <Nav navbar>
              <NavItem>
                <NavLink
                    onClick={e => {
                      e.preventDefault();
                      document
                          .getElementById("spring")
                          .scrollIntoView();
                    }}
                    style={{ color: "black" }}
                >
                  Spring Series
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                    onClick={e => {
                      e.preventDefault();
                      document
                          .getElementById("summer")
                          .scrollIntoView();
                    }}
                    style={{ color: "black" }}
                >
                  Summer Series
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                    onClick={e => {
                      e.preventDefault();
                      document
                          .getElementById("autumn")
                          .scrollIntoView();
                    }}
                    style={{ color: "black" }}
                >
                  Autumn Series
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                    onClick={e => {
                      e.preventDefault();
                      document
                          .getElementById("winter")
                          .scrollIntoView();
                    }}
                    style={{ color: "black" }}
                >
                  Winter Series
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
