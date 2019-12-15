import React, { Component } from "react";
import axios from "axios";

// Importing core components of the website
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// Importing components specific to the Contact page
import CartHeader from "components/CartHeader";
import CartItem from "components/CartItem";


class ShoppingCart extends Component {
  state = {
    itemsInCart: []
  };

  navResponsive = () => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");

    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  };

  componentDidMount() {
    this.navResponsive();

    axios
      .get("/api/work/spring")
      .then(response => {
        this.setState({ itemsInCart: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidUpdate() {
    this.navResponsive();
  }

  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="main pb-3" style={{background: "#f8f8f8"}}>
            <CartHeader />

            {this.state.itemsInCart.map(item => (
              <CartItem itemInfo={item} />
            ))}
          </div>
          <DarkFooter />
        </div>
      </>
    );
  }
}

export default ShoppingCart;
