// jsx created:
const profileCard = (
  <div className="container">
    {/* <NavBar /> */}
    <div className="profileCard">
      <img src="https://via.placeholder.com/200" alt="" />
      <div className="name">
        <h1>Paras verma</h1>
      </div>
      <div className="email">
        <p>parasverma2531@gmail.com</p>
      </div>
      <MainComponent /> {/* compoent added */}
    </div>
  </div>
);
// function to bring everything on the index.html
const myList = (
  <ul>
    <li>google</li>
    <li>twitter</li>
    <li>LinkedIn</li>
  </ul>
);
function MainComponent() {
  //JSX
  return <p>This is profile</p>;
}
const myNav = (
  <div className="navbar">
    <h1>Comickz</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact Us</li>
    </ul>
  </div>
);
// vanila JS:
// const para=document.createElement('h1');
// para.innerHTML="hello this is added through JS!"
// document.getElementById("root").appendChild(para);
ReactDOM.render(myNav, document.getElementById("root"));
