const myObj={
    name:"Paras",
    age:20,
    isAlive:true
}
console.log(myObj);
//returning object from function"
function getObj(){
    return{
        college:"UPES",
        state:"Uttarakhand"
    }
}
const myNewObj=getObj();
console.log(myNewObj);
//OBJECT DESTRUCTRING::
const{age:myAge}=myObj;
// here age is a key which is searched in myObj object
// and it's returned value is stored in myAge
//similar to : const myAge=myObj.age;
console.log(myAge);
//Added a new function inside myAge obj::
myObj.greet=()=>
{
   console.log("hello this is function inside object");
}
console.log(myObj);
console.log(myObj.greet());