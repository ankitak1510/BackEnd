//This should be the route that handles the creation of the products which the admin of the shop can do.
const express=require('express') ;

const router =express.Router(); //this router is like a miniexpress app tied to other express app


// router.get('/',(req,res,next)=>{
//     // console.log("This always runs ")
//      next();
//   });
// /admin/add-product=>GET
  router.get('/add-product',(req,res,next)=>{
    // console.log("In the second middleware")
     res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
  });

//same paths can be used if methods differ
// /admin/add-product=>POST
  router.post('/add-product',(req,res,next)=>{
    
    console.log(req.body)
    res.redirect('/')
})


module.exports=router;