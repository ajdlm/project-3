/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
//import LoginPage from "views/Pages/LoginPage.js";
import PaintPage from "views/Pages/PaintPage.js";
import CurationPage from "views/Pages/CurationPage";
import About from "views/About.js";
import Contact from "views/Contact.js";
import ShoppingCart from "views/ShoppingCart.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route path="/nucleo-icons" render={props => <NucleoIcons {...props} />} />
        <Route path="/PaintPage" render={props => <PaintPage {...props} />} />
        <Route path="/curationpage" render={props => <CurationPage {...props} />} />
        <Route path="/about" render={props => <About {...props} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/user"/>
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
