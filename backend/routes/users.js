const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const User = require('../models/model.users');
router.get("/", (req, res, next) => {
  res.json("user");
});

router.post("/signup", async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  console.log(username, password);
  let result = await userModel.validate(username, password);
   resp = await User.find({username : username, password : password});
  console.log(resp);
  res.send(result);
  
});

router.post("/register", async (req, res, next) => {
  let { firstName, lastName, username, password, email, role } = req.body;
  console.log(firstName, lastName, username, password, email, role);
  let results = await userModel.register(
    firstName,
    lastName,
    username,
    password,
    email,
    role
  );
  let newUser = new User({
    username: username,
    password: password,
    email: email,
    role: role, 
    firstname:firstName,
    lastname: lastName,
    profileimg: 'blank.jpg'
  })
  let mon = await User.find( { $or: [ { username: username }, { email:email } ] } )
  if(mong.length > 0){
    console.log(false);
  }
  else{

    newUser.save()
    .then(data =>{
  console.log('mong success save');  
    }) 
  }
  console.log(results);
  res.send(results);
});
module.exports = router;



/*
router.post("/signup", async (req, res, next) => {
  let user = req.body.username;
  let pwd = req.body.password;
  console.log(user, pwd);
  let result = await User.find({username : user, password : pwd});
  console.log(result);
  res.send(result);
  
});

router.post("/register", async (req, res, next) => {
  let { firstName, lastName, username, password, email, role } = req.body;
  let newUser = new User({
    username: username,
    password: password,
    email: email,
    role: role, 
    firstname:firstName,
    lastname: lastName,
    profileimg: 'blank.jpg'
  })
  let result = await User.find( { $or: [ { username: username }, { email:email } ] } )
  console.log(result);
  if(result.length > 0){
    res.json(false);
  }
  else{

    newUser.save()
    .then(data =>{
      res.json('success');  
    }) 
  }
});


*/
