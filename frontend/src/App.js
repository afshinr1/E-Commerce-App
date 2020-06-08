import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route,Switch,Redirect,} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Profile from "./components/layout/Profile";
import Shop from "./Shop";
import Cart from "./components/shop/Cart";
import Login from "./components/authenticate/Login";
import Purchased from "./components/shop/Purchased";
import Cookies from "universal-cookie";
import Register from "./components/authenticate/Register";
import Item from './components/shop/Item';
export class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedin: false,
      user: [],
    };
  }


  handleLogin = (data) => {
    console.log(data);
    this.setState((prevState) => {
      return { loggedin: true, user: data };
    });
  };
  render() {
    const cookies = new Cookies();
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/">
            {cookies.get("username") ? (
              <Redirect to="/app" />
            ) : (
              <Redirect to="/signin" />
            )}
          </Route>
          <Route
            path="/signin"
            render={(props) => (
              <Login {...props} handleLogin={this.handleLogin} />
            )}
          />
          <Route
            path="/app"
            render={(props) => (
              <Navbar
                {...props}
                condition={cookies.get("username") ? "Log Out" : "Log In"}
              />
            )}
          />
          <Switch>
            <Route path="/signup" component={Register} />
            <Route
              exact
              path="/app/profile"
              render={(props) => (
                <Profile {...props} userInfo={this.state.user} />
              )}
            />
            <Route exact path="/app/shop" component={Shop} />
            <Route path="/app/shop/:id" component={Item} />
            <Route path="/app/cart" component={Cart} />
            <Route path="/app/purchased" component={Purchased} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
