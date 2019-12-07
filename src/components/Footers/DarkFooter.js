/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
              >
                Contact  
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/suyaotian/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
    
            Project 3

        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
