import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export class Login extends Component {
  constructor() {
    super();
    this.state = { username: "", password: "", error: "" };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (!this.state.username || !this.state.password) {
      this.setState({ error: "Please fill out all fields" });
      return;
    } else {
      this.setState({ error: "" });
      await axios
        .post(`http://localhost:5000/User/signup`, {
          username: this.state.username,
          password: this.state.password,
        })
        .then((response) => {
          let data = response.data.user;
          if (data === null) {
            this.setState({ error: "Username or password is incorrect" });
          } else {
            this.props.handleLogin(data);
            this.props.history.push("/");
          }
        });
    }
  };

  render() {
    return (
      <div className="container">
        <form className="loginForm">
          <h2>Sign In</h2>
          <label style={{ color: "red" }}>{this.state.error}</label>
          <input
            name="username"
            className="login-input"
            placeholder="Enter username"
            type="text"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            name="password"
            className="login-input"
            placeholder="Enter password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button className="login-btn" onClick={this.handleSubmit}>
            Sign In
          </button>
          <Link className="login-link" to="/signup">
            <h2>Register</h2>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
