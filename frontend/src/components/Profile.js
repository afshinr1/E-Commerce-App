import React from "react";

export default function Profile(props) {
  const {firstName, lastName, email, username, role, password} = props.userInfo;
  return (
    <div className='profile'>
 
  <h1>{firstName}</h1>
  <h2>{lastName}</h2>
  <h2>{username}</h2>
  <h3>{email}</h3>
  <h5>{role}</h5>
  <h6>{password}</h6>
  
    </div>
  );
}
