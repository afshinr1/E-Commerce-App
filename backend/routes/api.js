const express = require("express");
const router = express.Router();
const url = require('url');
const shop = require('../models/shop');

router.use('/shop', require('./shop'));
router.use('/cart', require('./cart'));

router.get('/getPurchases', async (req,res,next)=>{
  console.log("in get purchasess");
  let  obj = url.parse(req.url,true).query;
  let username = obj.username;
   let prods =  await shop.getPurchases(username);
   console.log(prods);
   res.json(prods);    
});

router.get('/getCustomers', async (req,res, next)=>{
  let obj = url.parse(req.url,true).query;
  let username = obj.username;
  let response = await shop.getCustomers(username);
  console.log(response);
  res.json(response);
  
});

module.exports = router;
