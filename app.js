const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.static("./Statics"));
app.get("/",express.static('./Statics'));
app.get("/", (req, res) =>{
    res.send("Hello world!!");
});
app.listen(PORT, (req, res)=>{
    console.log("Listening on 3000 PORT...")
});