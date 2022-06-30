const express = require("express");
var hbs =require("hbs");
 const app = express();
 const path = require("path");
 const port =  process.env.PORT  || 8000;
 
 const staticpath = path.join(__dirname,"../public");
 const template_path=path.join(__dirname,"../template/views");
 const partials_path=path.join(__dirname,"../template/partials")
 

 app.use(express.static(staticpath));
 
app.set('view engine', 'hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);



// routing
 app.get("/home",(req,res)=>{
    res.render('index');

 });
 app.get("/about",(req,res)=>{
    res.render('about');

 });
 app.get("/weather",(req,res)=>{
    res.render("weather");

 });
 app.get("*",(req,res)=>{
    res.render("404error",{
      errorMsg:"opps!  page does not found"
    });

 });

 app.listen(port,()=>{
    console.log(` server is running now on port ${port}`);
 })