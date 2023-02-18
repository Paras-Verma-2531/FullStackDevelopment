 function orderPizza()
 {
    return new Promise(function(resolve,reject)
    {
        setTimeout(()=>
        {
            const isAvail=false;
            if(isAvail)
            {
            const pizza='🍕';
            resolve(pizza);
            }
            else{
                reject("we cannot offer pizza right now!");
            }
        },2000)
    })
 }
 const pizzaPromise=orderPizza();
 pizzaPromise.then((pizza)=>
 {
    console.log(pizza);
 }).catch(function err(msg)
 {
    console.log(msg);
 })
//  console.log(pizzaPromise);