const express = require('express');
const router = express.Router();
const userModel = require('../models/user');


router.get('/',(req,res, next) =>{
    res.json('user');
})

router.post('/signup', async (req, res, next)=>{
    let username = req.body.username;
    let password = req.body.password;
    console.log(username, password);
    let result = await userModel.validate(username, password);
    console.log(result);
        res.send(result);
})

router.post('/register',async (req,res,next)=>{
    let {firstName, lastName, username, password, email, role } = req.body;
    console.log(firstName, lastName, username, password, email, role);
    let results = await userModel.register(firstName, lastName, username, password, email, role); 
    console.log(results);
    res.send(results);
})
module.exports = router;