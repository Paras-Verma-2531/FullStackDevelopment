const a=[1,2,3,4,5,6,7,8];
function isEven(num)
{
    return num%2==0;
}
console.log(a.filter(isEven));