import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Login from "./components/authenticate/Login";
import Purchased from "./components/Purchased";
import Register from "./components/authenticate/Register";
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
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/">
            {this.state.loggedin ? (
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
          <Route path="/app" render ={(props) => (<Navbar {...props} condition={this.state.loggedin ? 'Log Out' : 'Log In'}/>)} />
          <Switch>
            <Route path="/signup" component={Register} />
            <Route exact path="/app" render={(props) => (<Profile {...props} userInfo={this.state.user} /> )}/>
            <Route exact path="/app/shop" component={Shop} />
            <Route path="/app/shop/:id" component={Shop} />
            <Route path="/app/cart" component={Cart} />
            <Route path="/app/purchased" component={Purchased} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
