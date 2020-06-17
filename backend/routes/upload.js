const express = require('express');
const router  = express.Router();
const user = require('../models/user');
const shop = require('../models/shop');
const url = require('url');
const User = require('../models/model.users');

router.post('/',  (req,res,next)=>{
    if(req.files === null){
      return res.status(400).json({msg: 'no file uploaded'});
    }
    let  obj = url.parse(req.url,true).query;
    let username = obj.username;
    const file = req.files.file;
    file.mv(`../frontend/public/profile_imgs/${file.name}`, async err=>{
      if(err){
        console.log(err);
        return res.status(500).send(err);
      }
     let response = await user.changeProfile(username, file.name);
     
      res.json({fileName: file.name, filePath : `/profile_imgs/${file.name}`});
    });
    
    });
    
    router.post('/addFile', async (req,res,next)=>{
      if(req.files === null){
        return res.status(400).json({msg: 'no file uploaded'});
      }
      let  obj = url.parse(req.url,true).query;
      let {username, name, stock, cost, manufacturer, description}= obj;
      console.log(username + name + stock + cost + manufacturer + description) ;
      const file = req.files.file;
      file.mv(`../frontend/public/item_imgs/${file.name}`, async err=>{
        if(err){
          console.log(err);
          return res.status(500).send(err);
        }
       let response = await shop.addItem(username,name, stock, cost, manufacturer, file.name, description);
       console.log(response);
  res.json({response});
      });
      
      });
      
    module.exports = router;