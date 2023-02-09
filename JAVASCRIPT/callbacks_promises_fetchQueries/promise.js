 function orderPizza()
 {
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>
        {
            const pizza='🍕';
            resolve(pizza);
        },2000)
    })
 }
 const pizzaPromise=orderPizza();
 pizzaPromise.then((pizza)=>
 {
     console.log(pizza);
 })
//  console.log(pizzaPromise);