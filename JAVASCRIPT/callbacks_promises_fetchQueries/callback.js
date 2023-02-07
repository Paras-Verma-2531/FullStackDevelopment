//:::callback::
// whenever a function is passed in aother func, it is known as callback
//callback is like:: once the method is running on asynchronous mode , how it will tell the other about it's completion::
//here callback comes into picture:
const orderPizza=(callback)=>
{
    setTimeout(()=>
    {
        const pizza='🍕';
        callback(pizza);
    },2000);
}
function notifyOnSuccess(pizza)
{
    console.log("here is my notification for",pizza);
}
orderPizza(notifyOnSuccess);