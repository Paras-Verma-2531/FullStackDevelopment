const profileCard = document.getElementById("profile-card");
const container=document.getElementById("container");
//  async function which fetch data from API
async function fetchData() {
  const response = await fetch("https://dummyjson.com/users");
  const jsonData = await response.json();// converts the response object to json
  const userData = jsonData.users;// extract the user array from jsonData
  bindData(userData);// pass the array to method
}
fetchData();
function bindData(users) {
  // iterate over the array
  users.forEach((user) => {
    //    create a clone of profile card for   each user
    const profileCardClone = profileCard.cloneNode(true);//makes the deep clone of profile card for each user
    const userName = profileCardClone.querySelector("#user-name");// fetch the attributes using QS on clone
    const userImage = profileCardClone.querySelector("#user-image");
    const userEmail = profileCardClone.querySelector("#user-email");
    // set the attributes dynamically
    userImage.src=user.image;
    userName.innerHTML=`${user.firstName} ${user.lastName}`
    userEmail.innerHTML=user.email;
    // now append the clone to container
    container.appendChild(profileCardClone);
  });
}

