import React, { Component } from "react";
import axios from "axios";

// Importing core components of the website
import PageContainer from "components/PageContainer";
import Wrapper from "components/Wrapper";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Main from "components/Main";
import DarkFooter from "components/Footers/DarkFooter.js";

// Importing components specific to the Contact page
import CartHeader from "components/CartHeader";
import CartItem from "components/CartItem";
import CartCheckout from "components/CartCheckout";

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

  calculateTotalPrice = items => {
    let totalPrice = 0;

    for (let i = 0; i < items.length; i++) {
      totalPrice += items[i].price;
    }

    return totalPrice;
  };

  assembleTransaction = itemsToPurchase => {
    const itemArray = [];

    for (let j = 0; j < itemsToPurchase.length; j++) {
      let newItem = {
        name: itemsToPurchase[j].name,
        price: itemsToPurchase[j].price
      };

      itemArray.push(newItem);
    }

    return itemArray;
  };

  postTransaction = purchasedItems => {
    axios.post("/api/transactions", purchasedItems, function(data) {
      console.log(data);
    });
  };

  render() {
    return (
      <PageContainer>
        <Wrapper>
          <IndexNavbar />

          <Main>
            <div style={{ flex: "1" }}>
              <CartHeader />

              {this.state.itemsInCart.map(item => (
                <CartItem itemInfo={item} />
              ))}

              <CartCheckout
                quantity={this.state.itemsInCart.length}
                totalPrice={this.calculateTotalPrice(this.state.itemsInCart)}
                transactionArray={this.assembleTransaction(
                  this.state.itemsInCart
                )}
                performTransaction={this.postTransaction}
              />
            </div>
          </Main>
        </Wrapper>
        <DarkFooter />
      </PageContainer>
    );
  }
}

export default ShoppingCart;
