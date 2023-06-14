// array of images::
const images = [
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1274&q=80",
  "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1484766280341-87861644c80d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
];
// get the html items using DOM
// const container = document.getElementById("container");
const flexContainer = document.getElementById("flex-container");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");
const containerWidth = 80;
const flexContainerWidth = images.length * containerWidth;
console.log(flexContainerWidth);

for (var i = 0; i < images.length; i++) {
  // create a new image element
  const newimage = document.createElement("img");
  // //set the src of image to images[i]
  newimage.src = images[i];
  // add the image class to each 'img'
  newimage.classList.add("image");
  flexContainer.appendChild(newimage);
}

let position = 0;
leftButton.addEventListener("click", () => {
  if(position==0)position=images.length-1;
  else position--;
  showImage();
});
// event listner for right button
rightButton.addEventListener("click", () => {
  if(position==images.length-1)position=0;
  else position=position%(images.length-1)+1;
  showImage();
  
});
// function showImage
function showImage() {
  // calculate new transform position
  const transformXPosition = -position * containerWidth;
  // console.log(transformXPosition);
  flexContainer.style.transform = `translateX(${transformXPosition}vw)`;
  // console.log("done");
}
