const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000

//Path for static web
const static_path = path.join(__dirname , "../public");
app.use(express.static(static_path));
const template_path = path.join(__dirname , "../templates/views");
const partials_path = path.join(__dirname , "../templates/partials");
// For use templete engine 
app.set("view engine" , 'hbs');
app.set('views' , template_path)
hbs.registerPartials(partials_path);

//Routess
app.get('/',(req,res)=>{
        res.render("index");
})
app.get('/about',(req,res)=>{
    res.render("about");
})
app.get('/weather',(req,res)=>{
    res.render("weather");
})
app.get('*',(req,res)=>{
    res.render("404error",{
        errorMsg : "oop's page not found! "
    });
})



app.listen(port,()=>{
    console.log("listening to port 8000")
})