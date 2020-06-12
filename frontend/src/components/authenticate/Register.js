import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: "",
      role: "",
      error: "",
      firstName: "",
      lastName: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !this.state.username ||
      !this.state.password ||
      !this.state.email ||
      !this.state.role ||
      !this.state.firstName ||
      !this.state.lastName
    ) {
      this.setState({ error: "Please fill out all fields" });
      return;
    }
    this.setState({ error: "" });
    await axios
      .post(`http://localhost:5000/User/register`, {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        role: this.state.role,
      })
      .then((response) => {
        let result = response.data;
        console.log(result);
        if (result === false) {
          this.setState({ error: "Username or email already taken" });
        } else {
          this.setState({ error: "Successfully registered!" });
        }
      });
  };

  render() {


    return (
      <div className="container">
                <div className='container-background'><img src='/logo.png' alt=''></img></div>

        <form className="loginForm">
          <h2>Register</h2>
          <label style={this.state.error.includes('Success') ? {color: 'green'} : {color: 'red'}}>{this.state.error}</label>

          <input
            name="firstName"
            className="login-input"
            placeholder="Enter First Name"
            type="text"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
          <input
            name="lastName"
            className="login-input"
            placeholder="Enter Last Name"
            type="text"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <input
            name="username"
            className="login-input"
            placeholder="Enter Desired username"
            type="text"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            name="email"
            className="login-input"
            placeholder="Enter email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
          ></input>
          <input
            name="password"
            className="login-input"
            placeholder="Enter password"
            type="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <select
            className="login-input"
            onChange={this.handleChange}
            value={this.state.role}
            name="role"
          >
            <option value="">Select your option</option>
            <option value="manager">Manager</option>
            <option value="customer">Customer</option>
          </select>
          <button className="login-btn" onClick={this.handleSubmit}>
            Register
          </button>
          <Link className="login-link" to="/signin">
            <h2>Sign In</h2>
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
