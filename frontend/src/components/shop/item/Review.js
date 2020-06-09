import React from "react";

export default function Review(props) {
  let ratingNum = Math.floor(props.rating);
  let span = [];
  let ja = 0;
  for (let i = 0; i < ratingNum; i++) {
    ja = i + 100;
    span.push(
      React.createElement(
        "span",
        { key: ja, className: "fa fa-star checked" } )
    );
  }
  for (let i = ratingNum; i < 10; i++) {
    ja = i + 200;
    span.push(
      React.createElement("span", { key: ja, className: "fa fa-star" })
    );
  }

  return (
    <div className="ratings">
      <h2>Star Rating</h2>
      <span>Rating: {ratingNum} </span>
      {span}
      <br />
      <h5>Reviews : {props.countReview}</h5>
    </div>
  );
}
