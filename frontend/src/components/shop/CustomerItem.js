import React, { Component } from "react";
import { Link } from "react-router-dom";
export class CustomerItem extends Component {
  constructor() {
    super();
    this.state = { quantity: 1 };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.changeSubtotal(value);
  };

  render() {
    const {
      productId,
      name,
      description,
      item_img,
      manufacturer,
      quantity,
      cost,
      type,
      username,
      //  message,
    } = this.props;
    let toShow = description.substring(0, 20) + "...";

    if (type === "cart") {
      return (
        <div className="cart-item">
          <Link to={`/app/shop/${productId}`}>
            <img
              src={window.location.origin + `/item_imgs/${item_img}`}
              alt=" "
            />
          </Link>
          <div className="the-item-info">
            <h1>{name} </h1>
            <h5>by {manufacturer}</h5>
            <span>Price: ${cost}</span>
            <h3>Description: {toShow}</h3>
            <label style={{ fontSize: "1rem", fontWeight: "700" }}>
              Quantity{" "}
              <select
                style={{ fontSize: "1rem", width: "20%" }}
                name="quantity"
                value={this.state.quantity}
                onChange={this.handleChange}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>
          </div>
          <button className='checkout-button'
            onClick={this.props.checkout.bind(
              this,
              productId,
              this.state.quantity
            )}
          >
            Checkout
          </button>
          <button className='icon-button' onClick={this.props.removeCart.bind(this, productId)}>
          <i className="fa fa-trash" aria-hidden="true"></i>

          </button>
        </div>
      );
    } else {
      let boughtBy;
      if(username)
      boughtBy = React.createElement('h3', {}, `by ${username}`);
      console.log(username);
      return (
        <div className="cart-item">
          <Link to={`/app/shop/${productId}`}>
            <img
              src={window.location.origin + `/item_imgs/${item_img}`}
              alt=" "
            />
          </Link>
          <div className="the-item-info">
            <h1>{name} </h1>
            <h5>by {manufacturer}</h5>
            <span>Price: ${cost}</span>
            <h3>Description: {toShow}</h3>
            <h4>Quantity : {quantity}</h4>
          </div>
          <div>
          <h2>
            Purchased 
            <i
              style={{ color: "green" }}
              className="fa fa-check"
              aria-hidden="true"
            ></i>
          </h2>
          {boughtBy}
          </div>
        
        </div>
      );
    }
  }
}

export default CustomerItem;
