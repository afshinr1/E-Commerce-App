import React from "react";

export default function Comment(props) {
  const { content, username, rating } = props.comment;

  return (
    <div className="item-comment">
           <span>{username} </span>
      <label> Rating : {rating}/10</label>
   <p>{content}</p> <br/>
    </div>
  );
}
