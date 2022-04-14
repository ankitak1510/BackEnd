//const http = require('http');

const express=require('express')

const bodyParser=require('body-parser');
//const routes = require('./routes');

//console.log(routes.someText);
const app=express()


const adminroutes=require('./routes/admin');
const shopRoutes=require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))

app.use('/admin',adminroutes)
app.use(shopRoutes)

app.use((req,res,next)=>{
  res.status(404).send('<h1>Page Not Found!</h1>')
})

// const server = http.createServer(app);

// server.listen(4000);
app.listen(3000)

