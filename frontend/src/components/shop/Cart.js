import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import CustomerItem from "./CustomerItem";
export class Cart extends Component {
  constructor() {
    super();
    this.state = { items: [], message: "" , subtotal: 0};
  }

  checkout = async (id, quantity) => {
    let cookies = new Cookies();
    let username = cookies.get("username");
 
    let message = await axios.post(
      `http://localhost:5000/api/cart/purchase?id=${id}&username=${username}&quantity=${quantity}`
    );
    if(message.data.includes('Not enough')){
      this.setState({message : "Not enough stock for purchase"});
    }
    else{
      this.setState({
        items: [...this.state.items.filter((item) => item.productId !== id)],
        message: "Checkout Successful",
      });
    }
  
  };
  changeSubtotal = (value) => {
    console.log(value);
  }
  removeCart = async (id) =>{
  let cookies = new Cookies();
    let username = cookies.get("username");
 
     await axios.delete(
      `http://localhost:5000/api/cart/delete?id=${id}&username=${username}`
    );
    this.setState({
      items: this.state.items.filter(item=> item.productId !== id),
      message : "Successfully removed from cart"
    });
  }

  getCartItems = () => {
    let cookies = new Cookies();
    let user = cookies.get("username");
    console.log(user + "jajaj");
    axios
      .get(`http://localhost:5000/api/cart/getItems?username=${user}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ items: response.data });
      });
  };

  componentDidMount() {
    this.getCartItems();
  }


  render() {
    let newPrice = 0;
    const listItems = this.state.items.map((item) => {
      newPrice += parseFloat(item.cost);
      return (
        <CustomerItem
        changeSubtotal = {this.changeSubtotal}
          key={item.idcart}
          item_img={item.item_img}
          name={item.name}
          stock={item.stock}
          cost={item.cost}
          description={item.description}
          manufacturer={item.manufacturer}
          productId={item.productId}
          type={"cart"}
          removeCart = {this.removeCart}
          checkout={this.checkout}
          message={this.state.message}
        
        />
      );
    });
    let subtotal;
    if (this.state.items.length > 0){
      subtotal = React.createElement("h3", {}, `Subtotal : $${newPrice}`);
    }
    return (
      <div className="cart-page">
        <h2 style={{ color: this.state.message.includes('Success') ? 'green' : 'red' }}>{this.state.message}</h2>
        {listItems}
        {subtotal}
   
      </div>
    );
  }
}

export default Cart;
