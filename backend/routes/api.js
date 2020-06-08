const express = require('express');
const router = express.Router();
const shop = require ('../models/shop');
const url = require('url');

router.get('/shop', async (req,res, next)=>{
    console.log('shop jaja');
    let results = await shop.getItems();
    res.json(results);
});

router.get('/shop/:id', async (req, res, next)=>{
    console.log('in get individual item');
    const queryObject = url.parse(req.url,true);
    let params = queryObject.path.split('/');
    let id = params[2];

    let results = await shop.getItem(id);
    res.json(results);
});

module.exports = router;