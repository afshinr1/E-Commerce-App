import React, { Component } from "react";
import axios from "axios";
import Item from "./ShopItem";
export class Shop extends Component {
  constructor() {
    super();
    this.state = { itemList: [] };
  }

  getItems = async () => {
    let response = await axios.get(`http://localhost:5000/api/shop`);
    this.setState({ itemList: response.data });
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    const items = this.state.itemList.map((item) => {
      return <Item key={item.productId} item={item} />;
    });
    return <div className="itemList">{items}</div>;
  }
}

export default Shop;
