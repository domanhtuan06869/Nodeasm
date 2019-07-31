const express = require('express');
const router = express.Router();
const Bills = new require('../models/BillUser');


router.post("/",function(req,res){
    console.log(req.body.name);
   
    const {nameproduct,sumprice,color,fullname,email,numberphone,address,status,payment,datebuy}=req.body


    const  Bill =new Bills({nameproduct:nameproduct,sumprice:sumprice,color:color,fullname:fullname,email:email,numberphone:numberphone,address:address,status:status,payment:payment,datebuy:datebuy})
 
  Bill.save(function(err){
       console.log(Bill)

  })

res.send('')
})
router.get('/detail',function(req,res){
    Bills.findOne({email:'t@gmaill.com'}).then((docs)=>{
        console.log(docs)
res.send(docs)
    })
})

module.exports = router;