const express= require("express");
const app=express();
app.use(express.json());
let port=process.env.PORT;
// let PORT=8080;
app.get("/bfhl",(req,res)=>{
    res.status(200).json({"monish":"monish"});
})
app.listen(port,()=>{
    console.log(`server running on port ${PORT}`);
})