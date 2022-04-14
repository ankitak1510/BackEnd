//const http = require('http');

const express=require('express')

const bodyParser=require('body-parser');
//const routes = require('./routes');

//console.log(routes.someText);
const app=express()

app.use(bodyParser.urlencoded({extended: false}))


app.use('/',(req,res,next)=>{
  // console.log("This always runs ")
   next();
});
app.use('/add-product',(req,res,next)=>{
  // console.log("In the second middleware")
   res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
});
app.post('/product',(req,res,next)=>{
    
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
  // console.log("In the second middleware")
   res.send('<h1>AnkyT</h1>')
   
});

// const server = http.createServer(app);

// server.listen(4000);
app.listen(4000)

