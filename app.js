const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());


const registerRoutes = require("./routes/register")
app.use("/register",registerRoutes);

const loginRoutes = require("./routes/login")
app.use("/login",loginRoutes);

app.use((req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
module.exports = app;