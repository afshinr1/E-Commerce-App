import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import propTypes from "prop-types";

export class ItemInfo extends Component {
  constructor() {
    super();
    this.state = { message: "", modalIsOpen: false, stock: "" };
  }

  addToCart = async (id) => {
    const cookies = new Cookies();

    let username = cookies.get("username");
    let result = await axios.post("http://localhost:5000/api/cart/add", {
      username: username,
      productid: id,
    });
    console.log(result.data);
    this.setState({ message: result.data });
  };

  changeStock = async (e) => {
    e.preventDefault();
    let stock = this.state.stock;
    if (isNaN(stock) || stock === "") {
      alert("Enter valid number");
      return;
    }
    let id = this.props.productId;
    this.props.changeStock(id, stock);
    this.setState({ message: "Stock Changed Successfully" });
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
    let role = new Cookies().get("role");
    let label;
    console.log(role);
    if (role === "manager") {
      label = (
        <div>
          <form
            onSubmit={this.changeStock}
            style={{ display: "flex", margin: "5px", height: "40px" }}
          >
            <input
              type="text"
              value={this.state.stock}
              onChange={(e) => this.setState({ stock: e.target.value })}
              placeholder="Stock available"
            ></input>
            <button>Change</button>
          </form>
        </div>
      );
    } else if (stock !== "0") {
      label = (
        <button onClick={this.addToCart.bind(this, productId)}>
          Add to Cart
        </button>
      );
    } else
      label = (
        <label style={{ color: "red", fontSize: "1.2rem", fontWeight: "900" }}>
          OUT OF STOCK
        </label>
      );
    return (
      <div className="the-item">
        <img src={window.location.origin + `/item_imgs/${item_img}`} alt=" " />
        <div className="the-item-info">
          {this.state.message && (
            <h3
              style={
                this.state.message.includes("Success")
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              {this.state.message}
            </h3>
          )}
          <h1>{name} </h1>
          <h5>by {manufacturer}</h5>
          <span>Price: ${cost}</span>
          <h3>Description: {description}</h3>
          <h3 style={{ color: stock === "0" && "red" }}>Stock : {stock}</h3>
        </div>
        {label}
      </div>
    );
  }
}

ItemInfo.propTypes = {
  addToCart: propTypes.array,
  name: propTypes.string,
  stock: propTypes.any,
  description: propTypes.string,
  item_img: propTypes.string,
  manufacturer: propTypes.string,
  cost: propTypes.any,
};
export default ItemInfo;
