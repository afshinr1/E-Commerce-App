import React, { Component } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import CustomerItem from './CustomerItem'
export class Cart extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }

  getCartItems = () => {
    let cookies = new Cookies();
    let user = cookies.get('username');
    console.log(user + 'jajaj');
    axios.get(`http://localhost:5000/api/cart/getItems?username=${user}`)
    .then(response =>{
      console.log(response.data)
      this.setState({items : response.data});
    })
  };


  componentDidMount() {
    this.getCartItems();
  }

  render() {
  let newPrice = 0;
    const listItems = this.state.items.map(item=>{
      newPrice += parseFloat(item.cost);
      return <CustomerItem key={item.idcart}
      item_img={item.item_img}
      name={item.name}
      stock={item.stock}
      cost={item.cost}
      description={item.description}
      manufacturer={item.manufacturer}
      productId={item.productId}
      type = {'cart'}
/>
    });

    return (
      <div className='cart-page'>
        {listItems}
        <h3>Subtotal: ${newPrice} </h3>
      </div>
    );
  }
}

export default Cart;
