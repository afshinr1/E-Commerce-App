import React from "react";

export default function Comment(props) {
  const { content, username, rating, profileimg } = props.comment;

  return (
    <div className="item-comment">
      <img
        src={window.location.origin + `/profile_imgs/${profileimg}`}
        alt=""
      />
      <span>{username} </span>
      <label> Rating : {rating}/10</label>
      <p>{content}</p> <br />
    </div>
  );
}
