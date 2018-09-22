const express=require('express');
var router=express.Router();
const Contact=require('../model/amscontact');
const Manual=require('../model/manual');

router.get('/rakesh',(req,res,next)=>{
  //get contact
  Contact.find(function(err,result){
      res.json(result);
  });
});
//get allcontacts
router.get('/users',(req,res,next)=>{
    //get contact
    Contact.find(function(err,contacts){
        res.json(contacts);
            });
});
//Get App and Manual Report for all
//db.getCollection('mactivities').find({ "appRef": ObjectId("5a7af6bb25276934dcf71287")})

router.get('/trainreport',(req,res,next)=>{
  //get contact
  Manual.find(function(err,contacts){
      res.json(contacts);
          });
});

//get Manual for Single app  -- need to modify
router.get('/trainreport/:id',(req,res,next)=>{
  Manual.find({appRef:req.params.id},
  function(err,result){
      if(err){
          res.json(err);
      }
      else
      {
          res.json(result);

      }
  })
  });

  //get all manual activity to one application or parent

  //get Manual for Single app  -- need to modify
router.get('/manual/:id',(req,res,next)=>{
  Manual.find({_id:req.params.id},
  function(err,result){
      if(err){
          res.json(err);
      }
      else
      {
          res.json(result);

      }
  })
  });

//get a single contact
router.get('/users/:id',(req,res,next)=>{
    Contact.find({_id:req.params.id},
    function(err,result){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(result);

        }
    })
    });


//add contact
router.post('/users',(req,res,next)=>{
    //add logic
    let newContact = new Contact({
        emp_id: req.body.emp_id,
        emp_name: req.body.emp_name,
        emp_con: req.body.emp_con,
        emp_stack: req.body.emp_stack,
        emp_band: req.body.emp_band,
        emp_mgr: req.body.emp_mgr,
        emp_form: req.body.emp_form,
        emp_loc: req.body.emp_loc
    });
    newContact.save((err,contact)=>{
        if(err){
            res.json({msg:'Failed to add contact'})
        }
        else{
            res.json({msg:'Successfully added contact'})
        }
    });
});

//updating the data
router.put('/users/:id',(req,res,next)=>{
    Contact.findOneAndUpdate({_id:req.params.id},{
        $set:{
            emp_id: req.body.emp_id,
            emp_name: req.body.emp_name,
            emp_con: req.body.emp_con,
            emp_stack: req.body.emp_stack,
            emp_band: req.body.emp_band,
            emp_mgr: req.body.emp_mgr,
            emp_form: req.body.emp_form,
            emp_loc: req.body.emp_loc
        }
    },
    function(err,result){
        if(err){
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//delete contact
router.delete('/users/:id',(req,res,next)=>{
    Contact.remove({_id: req.params.id},(err,result)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});
//add Manual activity -Mosh
router.post('/train',(req,res,next)=>{
  Contact.findById(req.body.appRef, function(err,result){
    console.log('Result'+result);
//add logic
let newactivity = new Manual({
  tname : req.body.tname,
  tstatus : req.body.tstatus,
  tdate : req.body.tdate,
  appRef: req.body.appRef
}
);
console.log(newactivity);
newactivity.save((err,contact)=>{
    if(err){
        res.json(err)
      }
    //console.log(result);
   // result.manualactivities.push(contact);
    result.save();
    //console.log(result.manualactivities);
});
  });

});


router.get('/train',(req,res,next)=>{
  //get contact
  Manual.find(function(err,result){
      res.json(result);
  });
});

//get a single manual
router.get('/train/:id',(req,res,next)=>{
  Manual.find({_id:req.params.id},
  function(err,result){
      if(err){
          res.json(err);
      }
      else
      {
          res.json(result);

      }
  })
  });
module.exports=router;
