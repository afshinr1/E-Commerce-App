const express = require('express');
const router  = express.Router();
const cart = require("../models/cart");
const url = require('url');
router.post("/add", async (req, res, next) => {
    console.log("in add to cart");
    let { username, productid } = req.body;
        console.log(username + productid)
      let message=  await cart.addToCart(username, productid);
      console.log(message); 
      res.json(message);
  });
  
  router.get("/getItems", async (req, res, next) => {
    console.log("in get cart");
    let  obj = url.parse(req.url,true).query;
    let username = obj.username;
        console.log(obj.username );
     let prods =  await cart.getCart(username);
     console.log(prods);
    res.json(prods);    
  });
  

module.exports = router;