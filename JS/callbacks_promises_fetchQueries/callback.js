//:::callback::
// whenever a function is passed in aother func, it is known as callback
//callback is like:: once the method is running on asynchronous mode , how it will tell the other about it's completion::
//here callback comes into picture:
//const orderPizza=(callback)=>
// {
//     setTimeout(()=>
//     {
//         const pizza='🍕';
//         callback(pizza);
//     },2000);
// }
// function notifyOnSuccess(pizza)
// {
//     console.log("here is my notification for",pizza);
// }
// orderPizza(notifyOnSuccess);
function getCheese(next)
{
    setTimeout(()=>
    {
        const cheese='🧀';
        console.log("sending the ",cheese);
        next(cheese);
    },2000);
}
// function for Dough
function getDough(item,next)
{
    setTimeout(()=>
    {
      const dough= item+ '🍩';
      console.log("sending the ",dough);
      next(dough);
    },2000);
}
function makePizza(item,next)
{
    setTimeout(()=>
    {
      const pizza= item+ '🍕';
      console.log("sending the ",pizza);
      next(pizza);
    },2000);
}
//function for orderPizza
function orderPizza(notifyOnSuccess)
{
    getCheese((cheese)=>
    {
        getDough(cheese,(dough)=>
        {
            makePizza(dough,(pizza)=>
            {
                notifyOnSuccess(pizza);
            })
        })
    })
}
function notifyOnSuccess(pizza)
{
    console.log("here is my "+pizza);
}
orderPizza(notifyOnSuccess);