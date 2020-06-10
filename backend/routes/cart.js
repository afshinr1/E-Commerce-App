const express = require('express');
const router  = express.Router();
const cart = require("../models/cart");
const purchase = require('../models/pruchase');

const url = require('url');
router.post("/add", async (req, res, next) => {
    console.log("in add to cart");
    let { username, productid } = req.body;
      let message=  await cart.addToCart(username, productid);
      console.log(message); 
      res.json(message);
  });
    router.delete('/delete', async(req,res,next)=>{
      console.log("in deletee from cart");
      let  obj = url.parse(req.url,true).query;
      let {username, id } = obj;
    let  response = await cart.deleteItem(id, username);
      console.log('delete successful)');
      res.json(response);
    });

  router.post("/purchase", async (req, res, next) => {
    console.log("in add to purchase from cart");
    let  obj = url.parse(req.url,true).query;
    let {username, id, quantity } = obj;
    let response = await purchase.reduceStock(id, quantity);
    console.log(response);

    if(response.includes('Success')){
      response=  await purchase.addToPurchases(username, id, quantity);
       response = await cart.deleteItem(id, username);
    }
    res.json(response);
   
  });
  

  router.get("/getItems", async (req, res, next) => {
    console.log("in get cart");
    let  obj = url.parse(req.url,true).query;
    let username = obj.username;
        console.log(obj.username );
     let prods =  await cart.getCart(username);
    res.json(prods);    
  });
  

module.exports = router;