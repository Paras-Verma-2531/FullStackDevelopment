// here Page is a reatc reusable comp:
function Header() {
  return (
    <header>
      <nav className="nav">
        <img
          id="image"
          src="https://via.placeholder.com/200"
          width="40px"
          alt="placeholder-image"
        />
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function Page() {
  return (
    <div>
      <Header />
      <h1>Welcome to my Page</h1>
      <ul>
        <li>I love Cricket</li>
        <li>I love Music</li>
        <li>I am a big foodie</li>
      </ul>
    </div>
  );
}
//  here component func is directly used instead of <Page/>
// ReactDOM.render(Page(), document.getElementById("root")); not the correct way
ReactDOM.render(<Page />, document.getElementById("root"));
