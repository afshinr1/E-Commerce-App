const express = require('express');
const router = express.Router();
const shop = require("../models/shop");
const item = require("../models/Item");
const url = require("url");


router.get("/", async (req, res, next) => {
    console.log("shop jaja");
    let results = await shop.getItems();
    res.json(results);
  });
  
  router.get("/:id", async (req, res, next) => {
    console.log("in get individual item");
    const queryObject = url.parse(req.url, true);
    let params = queryObject.path.split("/");
    let id = params[1];
  
    let results = await shop.getItem(id);
    res.json(results);
  });
  
  router.get("/:id/comments", async (req, res, next) => {
    console.log("in get individual comment item");
    const queryObject = url.parse(req.url, true);
    let params = queryObject.path.split("/");
    let id = params[1];
    let results = await shop.getComments(id);
    res.json(results);
  });
  
  router.post("/:id/comments", async (req, res, next) => {
    console.log("in post add comment ");
    let { username, text, rating } = req.body;
    const queryObject = url.parse(req.url, true);
    let params = queryObject.path.split("/");
    let id = params[1];
    let results = await item.addComment(id, username, text, rating);
    res.json(results);
  });
  
  router.put("/:id/review", async (req, res, next) => {
    let theItem = req.body.item;
    await item.updateItemReview(theItem);
  });
  


module.exports = router;