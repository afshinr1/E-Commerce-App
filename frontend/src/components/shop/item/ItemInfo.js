import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

export class ItemInfo extends Component {
constructor(){
  super();
  this.state = {message : ''}
}

  addToCart = async (id) => {
    const cookies = new Cookies();

    let username = cookies.get("username");
    let result = await axios.post("http://localhost:5000/api/cart/add", {
      username: username,
      productid: id,
    });
    console.log(result.data);
    this.setState ({message : result.data});
  };

  render() {
    const {
      productId,
      name,
      stock,
      description,
      item_img,
      manufacturer,
      cost,
    } = this.props;

    return (
      <div className="the-item">
        <img src={window.location.origin + `/item_imgs/${item_img}`} alt=" " />
        <div className="the-item-info">
    {this.state.message && <h3 style={this.state.message.includes("Success") ? {color:'green'} : {color:'red'}}>{this.state.message}</h3>}
          <h1>{name} </h1>
          <h5>by {manufacturer}</h5>
          <span>Price: ${cost}</span>
          <h3>Description: {description}</h3>
          <h3>Stock : {stock}</h3>
        </div>
        <button onClick={this.addToCart.bind(this, productId)}>Add to Cart</button>
      </div>
    );
  }
}

export default ItemInfo;
