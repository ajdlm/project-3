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
    wasDeleted: false,
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

  getCart = () => {
    axios
      .get("/api/cart")
      .then(res => {
        if (res.data) {
          this.setState({ itemsInCart: res.data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.navResponsive();

    this.getCart();
  }

  componentDidUpdate() {
    this.navResponsive();

    if (this.state.wasDeleted === true) {
      this.setState({ wasDeleted: false });

      this.getCart();
    }
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

  deleteItem = item => {
    console.log(item);

    axios
      .put("/api/cart", item)
      .then(response => {
        this.setState({ wasDeleted: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <PageContainer>
        <IndexNavbar />

        <Wrapper>
          <Main>
            <div
              style={{ background: "#f8f8f8", marginTop: "72px", flex: "1" }}
            >
              <CartHeader />

              {this.state.itemsInCart.map(item => (
                <CartItem itemInfo={item} deleteItem={this.deleteItem} />
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
