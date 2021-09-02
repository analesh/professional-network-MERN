const express =require('express');
const router =  express.Router();
const {check,validationResult} = require('express-validator/check')

//@route POST api/users
//@descrip Test route
//@@access Public
router.post( '/',
[
    check('name','Name is required')
    .not()
    .isEmpty(),
    check('email','Please providde valid email')
    .isEmail(),
    check('password','please provide password of min len 6')
    .isLength({min:6})
]
,(req,res) =>{
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
}
         res.send("User route")});

module.exports=router;