// class Vehicle
// {
//     constructor()
//     {
//         this.name="XUV";
//         this.noOfTyres=4;
//     }
//     // u don't have to write function variable inside the 
//     // class for creating function : :
//     start()
//     {
//         console.log("car is starting");
//     }
// }
// const obj1= new Vehicle();
// console.log(obj1);
// obj1.start();
//json object
const jsonData=`
{
    "user":"paras",
    "college":"upes",
    "age":"21"
}`
const jsonObj=JSON.parse(jsonData);
console.log(jsonObj);