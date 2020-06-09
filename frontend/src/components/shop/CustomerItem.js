import React from 'react'

export default function CustomerItem(props) {
    const {
        productId,
        name,
        stock,
        description,
        item_img,
        manufacturer,
        cost,
        type
      } = props;
  
    return (
        <div className="cart-item">
        <img src={window.location.origin + `/item_imgs/${item_img}`} alt=" " />
        <div className="the-item-info">
          <h1>{name} </h1>
          <h5>by {manufacturer}</h5>
          <span>Price: ${cost}</span>
          <h3>Description: {description}</h3>
          <h3>Quantity : {stock}</h3>
        </div>
        <button>Checkout</button>
      </div>
    )
}
