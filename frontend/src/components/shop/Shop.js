import React, { Component } from "react";
import axios from "axios";
import Item from "./ShopItem";
import Searchbar from ".//Searchbar";
export class Shop extends Component {
  constructor() {
    super();
    this.state = { itemList: [], message: '' };
  }

  getItems = async () => {
    let response = await axios.get(`http://localhost:5000/api/shop`);
    this.setState({ itemList: response.data });
  };

  componentDidMount() {
    this.getItems();
  }
  search = async (text) =>{
console.log(text);
let response = await axios.get(`http://localhost:5000/api/search?value=${text}`);
console.log(response);
if(response.data.length === 0){
  this.setState({message : "Search not found"});
}
this.setState({ itemList: response.data });


  }

  render() {
    const items = this.state.itemList.map((item) => {
      return <Item key={item.productId} item={item} />;
    });
    return (
      <React.Fragment>
        <Searchbar search={this.search}/>
        <h2 style={{textAlign:'center', color: 'red', textTransform: 'capitalize'}}>{this.state.message}</h2>

        <div className="itemList">{items}</div>
      </React.Fragment>
    );
  }
}

export default Shop;
