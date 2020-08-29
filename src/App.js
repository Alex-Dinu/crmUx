import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";
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
      <div className="container">
        <header className="header">
          {/* <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">crm</Link>
          </div> */}
          {/* <div className="header-links">
            <a href="/">Home</a>
            <a href="/customers">Customers</a>
            <a href="/signout">Sign Out</a>
          </div> */}
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
        </header>

        {/* <aside className="sidebar">
          <h3>crm menu</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="header-links">
            <li key="signin">
              <a href="/signin">Sign In</a>
            </li>

            <li key="signout">
              <a href="/signout">Sign Out</a>
            </li>
            <li key="customers">
              <a href="/customers">Customers</a>
            </li>
            <li key="home">
              <a href="/">Home</a>
            </li>
          </ul>
        </aside> */}

        <main className="main">
          <div className="content">
            <Route path="/CustomerScreen" component={CustomerScreen} />
            <Route path="/CustomersScreen" component={CustomersScreen} />
            <Route path="/signout" component={SignOut} />
            <Route path="/signin" component={SignIn} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All rights preserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
