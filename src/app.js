const express= require("express");
const app=express();
app.use(express.json());
let port=process.env.PORT;
// let port=8080;

app.post("/bfhl",(req,res)=>{

    let odd=[];
    let even=[];
    if(!req.body.numbers)
    return res.status(400).send();
    const numbers=req.body.numbers;
    for(i=0;i<numbers.length;i++){
        let temp=Number(numbers[i]);        
        if(isNaN(temp)){
            return res.json({
                "is_success":false,
                "user_id":"monish_wankhade_19112000"
            });

        }
        if(temp%2==0)
        even.push(temp);
        else
        odd.push(temp);
    }
    res.status(200).json({
        "is_success":true,
        "user_id":"monish_wankhade_19112000",
        "odd":odd,
        "even":even
    })
    
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})