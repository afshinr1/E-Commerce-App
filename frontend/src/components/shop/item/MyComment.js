import React, { Component } from "react";
import propsType from 'prop-types'

export class MyComment extends Component {
  constructor() {
    super();
    this.state = { text: "", rating: " " };
  }

  handleClick = (e) => {
    e.preventDefault();
    if (!this.state.text || !this.state.rating) {
      alert("Please fill out all fields");
      return;
    }
    this.setState((prevState) => {
      prevState.text = "";
      prevState.rating = "";
      return { prevState };
    });
    this.props.addComment(this.state.text, this.state.rating);
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="my-comment" onSubmit={this.handleClick}>
        <div className="comment-box">
          <textarea
            placeholder="Please leave a review!"
            name="text"
            onChange={this.handleChange}
            value={this.state.text}
          ></textarea>
          <select name="rating" onChange={this.handleChange}>
            <option value=""></option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

MyComment.propsType = {
  addComment : propsType.array.isRequired
}

export default MyComment;
