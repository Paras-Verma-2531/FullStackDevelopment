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
const carouselNav=document.getElementById("carousel-nav");

for (var i = 0; i < images.length; i++) {
  // create a new image element
  const newimage = document.createElement("img");
  // //set the src of image to images[i]
  newimage.src = images[i];
  // add the image class to each 'img'
  newimage.classList.add("image");
  flexContainer.appendChild(newimage);
  // create new div for nav:
  const carouselDot=document.createElement('div');
  carouselDot.classList.add("carousel-dot");
  carouselNav.appendChild(carouselDot);
  // add event listner to each dot
  carouselDot.addEventListener('click',(event)=>{
    // we need to convert list of nav children to array to find index of each elem.
    //... are used to add array of child to outer array as its element rather than array of array
    const index=[...carouselNav.children].indexOf(event.target);
    // console.log(index);
    showImage(index);
  })
}

let position = 0;
leftButton.addEventListener("click", () => {
  if(position==0)showImage(images.length-1);
  else showImage(position-1);
});
// event listner for right button
rightButton.addEventListener("click", () => {
  if(position==images.length-1)showImage(0);
  else showImage(position+1);
});
// function showImage
function showImage(currposition) {
  // calculate new transform position
  const prevDot=carouselNav.children[position];
  prevDot.classList.remove("active");
  position=currposition;
  carouselNav.children[position].classList.add("active");
  const transformXPosition = -currposition * containerWidth;
  flexContainer.style.transform = `translateX(${transformXPosition}vw)`;
  // console.log("done");
}
