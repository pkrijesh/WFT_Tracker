const express=require('express');
var router=express.Router();
var User = require('../routes/user');
router.post('/login',function(req,res,next){
var user= new User({
  email: req.body.email,
  password: req.body.paswword,
});
user.save(function(err,result){
  if(err){
    res.json({msg:'Failed to regiser user'})
}
else{
    res.json({msg:'Successfully regiser user'})
}
});
});

module.exports=router;
