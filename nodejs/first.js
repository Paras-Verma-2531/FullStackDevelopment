// import the express
const express=require('express');
const app=express();
//create an api end-point::
app.get('/',(req,res)=>
{
    res.send("hello")
})
app.listen(4000,()=>
{
    console.log('listening on port 4000:');
})