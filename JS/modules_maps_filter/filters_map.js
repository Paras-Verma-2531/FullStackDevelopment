// const a=[1,2,3,4,5,6,7,8];
// function isEven(num)
// {
//     return num%2==0;
// }
// console.log(a.filter(isEven));
// function square(num)
// {
//     return num*num;
// }
// console.log(a.map(square));
// const StringArr=["paras","hello","verma","ab","bc"];
// console.log(StringArr.filter(element=>
//     {
//         return element.length<3;
//     }));
const Names=["Paras","Akshita","Harsh","Aparna"];
console.log(Names.filter((element)=>{
    return element.length<6;
}));