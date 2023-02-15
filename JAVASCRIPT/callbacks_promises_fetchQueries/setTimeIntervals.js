// setTimeOut method is used to perform a task 
// after particular amount of time::
// this method will be executed only once::
setTimeout(()=>
{
    // anonymous function which is displaying the message
    console.log("hello this function is called after 2 sec");
},2000);
// this will be executed before::
console.log("this is written before above func");
// setInterval method is repeatedly called after the specific time:
// to display date::
setInterval(()=>{
    const date=new Date().toTimeString();
    console.log(date);
},2000);
