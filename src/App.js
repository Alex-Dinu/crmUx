import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import SignOut from "./screens/SignOut";
import SignIn from "./screens/SignIn";
import CustomersScreen from "./screens/CustomersScreen";
import CustomerScreen from "./screens/CustomerScreen";

function App() {
  // const openMenu = () => {
  //   document.querySelector(".sidebar").classList.add("open");
  // };

  // const closeMenu = () => {
  //   document.querySelector(".sidebar").classList.remove("open");
  // };
  return (
    <BrowserRouter>
      <div className="header">
        <nav id="hamnav">
          <label htmlFor="hamburger">&#9776;</label>
          <input type="checkbox" id="hamburger" />

          <div id="hamitems">
            <a href="/">Home</a>
            <a href="/signin">Sign In</a>
            <a href="/signout">Sign Out</a>
            <a href="/CustomersScreen">Customers</a>
          </div>
        </nav>
      </div>

      <div className="main">
        {/* <div className="content"> */}
        <Route path="/CustomerScreen" component={CustomerScreen} />
        <Route path="/CustomersScreen" component={CustomersScreen} />
        <Route path="/signout" component={SignOut} />
        <Route path="/signin" component={SignIn} />
        <Route path="/" exact={true} component={HomeScreen} />
        {/* </div> */}
      </div>
      <footer>All rights preserved.</footer>
    </BrowserRouter>
  );
}

export default App;
