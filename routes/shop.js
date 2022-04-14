// what the users see
const express=require('express')

const router =express.Router();

router.get('/',(req,res,next)=>{
    // console.log("In the second middleware")
     res.send('<h1>hello!</h1>')
     
  });

  module.exports=router;