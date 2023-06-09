const coordinates=document.createElement("p");
document.body.append(coordinates);
const displayCoordinates=(event)=>
{
    coordinates.innerHTML=`${event.offsetX} ${event.offsetY}`; 
}
document.getElementById("child").addEventListener("onmouse",displayCoordinates);