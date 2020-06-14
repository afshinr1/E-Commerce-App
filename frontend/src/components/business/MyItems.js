import React, { Component } from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie';
import Item from '../shop/ShopItem'
export class MyItems extends Component {
    constructor(){
        super();
        this.state = { items : []}
    }
    getMyItems = async () => {
        let cookies = new Cookies();
        let response = await axios.get(`http://localhost:5000/api/shop/getMyItems?username=${cookies.get('username')}`);
        console.log(response);
        this.setState({ items: response.data });
      };
    

    componentDidMount(){
        this.getMyItems();
    }
    
    render() {
        const items = this.state.items.map(item => {
            return <Item key={item.productId} item={item}/>
        });
        return (
            <div className='itemList'>
                {items}
                
            </div>
        )
    }
}

export default MyItems
