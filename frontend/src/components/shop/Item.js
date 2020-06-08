import React, { Component } from 'react'
import axios from 'axios';
export class Item extends Component {
    constructor(){
        super();
        this.state = {item : {}}
    }
    getItem = ()=>{

        let id = this.props.match.params.id;
        axios.get(`http://localhost:5000/api/shop/${id}`)
        .then(response =>{
            this.setState ({item : response.data[0]});
        })
    }

    componentDidMount(){
        this.getItem();
        
    }

    render() {
        console.log(this.state.item);
        const { productId, name, stock, description, item_img, manufacturer, rating, countReview} = this.state.item;
        return (
            <div>  
                <h1>Item</h1>
            </div>
        )
    }
}

export default Item
