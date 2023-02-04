//Higher_Order functions:
const arr=[];
const arr2=[1,2,3,4,5,6,7];
// const evenNumbers=()=>
// {
//     for(let i=0;i<arr2.length;i++)
//     {
//         if(arr2[i]%2==0)arr.push(arr2[i]);
//     }return arr;
// }
function displayEven(checkingFunction)
{
    for(let i=0;i<arr2.length;i++)
    {
        if(checkingFunction(arr2[i]))arr.push(arr2[i]);
    }return arr;
}
function isEven(num)
{
    return num%2==0;
}
console.log(displayEven(isEven));