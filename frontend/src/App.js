import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Purchased from "./components/Purchased";
function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Route path="/" exact component={Profile} />
        <Route path="/shop" component={Shop} />
        <Route path="/shop/:id" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/purchased" component={Purchased} />
      </React.Fragment>
    </Router>
  );
}

export default App;
