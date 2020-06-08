import React from "react";
import { Link } from "react-router-dom";

export default function ShopItem(props) {
  let { productId, name, description, rating, cost, item_img } = props.item;
  let toShow = description.substring(0, 20) + "...";

  return (
    <div className="item">
      <Link to={`/app/shop/${productId}`}>
        <img src={window.location.origin + `/item_imgs/${item_img}`} alt="" />
      </Link>
      <h1>{name}</h1>
      <h3>{toShow}</h3>
      <h4>CND: ${cost}</h4>
      <span>{rating}/10</span>
      <br />
      <Link to={`/app/shop/${productId}`}>View full product</Link>
    </div>
  );
}
