import React from "react";
import Cookies from 'universal-cookie'

export default function Profile(props) {

  const cookies = new Cookies();
  return (
    <div className='profile'>
      {console.log(cookies.get('profileimg'))}
    <img src={window.location.origin + `/profile_imgs/${cookies.get('profileimg')}`} alt="" />

  <h1>Name : {cookies.get('name')}</h1>
  <h2>Username : {cookies.get('username')}</h2>
  <h3>Email : {cookies.get('email')}</h3>
  <h3> Role : {cookies.get('role')}</h3>
   

    </div>
  );


}
