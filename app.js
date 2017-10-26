var express = require("express");
var app =express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");


app.get("/",(req,res)=>{
  res.render ("home");
});
var friends =["Cody","Caleb", "Noah", "Justin"];
app.post("/addfriend", (req,res)=>{
  var newfrind =req.body.newfriend;
  // console.log(req.body.newfriend);
  friends.push(newfrind);
  res.redirect("/friends");
});
app.get("/friends",(req,res)=>{

  res.render("friends",{friends:friends});
});
app.listen(2222, ()=>{
  console.log("Server started, port 2222 !")
})
