const images=[
    '',
    '',
    '',
    '',
    '',
];
const flexContainer=document.getElementById("flex-container");
const rightButton=document.getElementById("left-button");
const leftButton=document.getElementById("right-button");
for(let i=0;i<images.length;i++)
{
  const newimage=document.createElement('img');
  newimage.src=images[i];
  flexContainer.appendChild(newimage);
}
