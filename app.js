const express = require("express");
const router = require("./routers");
const app = express();
app.use(express.json());
app.use("/api", router)

app.use((error,req,res,next)=>{
  res.status(500).send("server error")
});


module.exports = app;