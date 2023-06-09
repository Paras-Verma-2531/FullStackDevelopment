const logMessage=(event)=>{
    boxElement.style.backgroundColor='#080202';
    boxElement.innerHTML=`${event.offsetX} ${event.offsetY}`
}
const container=document.getElementsByClassName("container");
const boxElement=document.createElement('div');
boxElement.classList.add('box');
container[0].append(boxElement);
// const addMessage=()=>{
//     boxElement.innerText='HI';
// }
// boxElement.innerHTML=logMessage;
// boxElement.addEventListener('click',logMessage);
container[0].addEventListener('click',logMessage);