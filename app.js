const express = require('express');
const app = express();

app.set("view engine","ejs");
app.get("/",function (req,res){
    res.render("landing");
});

app.get("/campgrounds", function (req,res){
  var campgrounds = [
    {name:'Salmon Creek', image:'https://pixabay.com/get/e83db50a2dfd013ed1584d05fb1d4e97e07ee3d21cac104496f4c97fa0eeb0bb_340.jpg'},
    {name:'Granite Hill', image:'https://farm5.staticflickr.com/4512/37754360946_9bf9389fe5.jpg'},
    {name:"Mountain Goat's", image:'https://farm6.staticflickr.com/5202/5248221616_4149554fa5.jpg'}

  ]
  res.render("campgrounds",{campgrounds:campgrounds});
});


app.listen(3000,function(){
  console.log('Server começou')
})