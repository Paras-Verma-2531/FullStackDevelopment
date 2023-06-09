const grandParent=document.getElementById("grandParent");
const parent=document.getElementById("parent");
const child=document.getElementById("child");
grandParent.addEventListener("click",()=>{
    console.log("GrandParent is clicked");
})
parent.addEventListener("click",()=>{
    console.log("parent is clicked");
})
child.addEventListener("click",()=>{
    console.log("child is clicked");
})








// const logMesssage=()=>{
//     console.log("hey!! this is log.");
// }
// const changeColor=()=>
// {
//     document.getElementById("container").classList.add("dark-color");
// }
// const coordinates=document.createElement("p");//creates a p tag at runtime::
// document.body.append(coordinates);//append it in the body
// const displayCordinates=(event)=>{
//    coordinates.innerHTML=`${event.offsetX} ${event.offsetY}`;//displays the offsets using .offset of event object
// }
// document.getElementById("box1").addEventListener("click",displayCordinates);
