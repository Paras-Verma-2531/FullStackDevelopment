// Array of sound
const soundArray = [
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/snare.mp3",
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
];
// A factoryMethod that returns the object of Audio with sound at index 'i'
function getSound(i) {
  return new Audio(soundArray[i]);
}
// ***********************//
var NumberOfButtons = document.querySelectorAll(".drum");
var i = 0;
// Adding keydown eventListner to entire document
document.addEventListener("keydown", (event) => {
  // call to selectMusic method
  selectMusic(event.key);
  addAnimation(event.key);
});
// iterate in the loop to add eventListner for each button
while (i < NumberOfButtons.length) {
  NumberOfButtons[i].addEventListener("click", function () {
    var buttonText = this.innerText; // get the innerText
    selectMusic(buttonText);
    addAnimation(buttonText);
  });
  i++;
}
// function for switch statements
function selectMusic(key) {
  switch (key) {
    case "w":
      getSound(0).play(); //performs play method on audio object based on input key
      break;
    case "a":
      getSound(1).play();
      break;
    case "s":
      getSound(2).play();
      break;
    case "d":
      getSound(3).play();
      break;
    case "j":
      getSound(4).play();
      break;
    case "k":
      getSound(5).play();
      break;
    case "l":
      getSound(6).play();
      break;
    default:
      alert("Press only the given keys!!");
      break;
  }
}

// function to add Animation
function addAnimation(key)
{
  var activebutton=document.querySelector("."+key);
  activebutton.classList.add("pressed");
  setTimeout(()=>{
    activebutton.classList.remove("pressed");
  },100)
}