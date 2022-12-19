import logo from "../images/Chitter.png";
const Header = () => {
  return (
    <header>
 <div className="bg-light-yellow">
 <nav className="navbar navbar-expand-lg">
  {/* <video autoPlay loop muted width="150">
    <source src = {logo} alt="Chitter" width="100"></source>
  </video> */}
<img src={logo} alt="Digital Futures" width="120" />

  <div className="text-white">
  <h3>Chitter App</h3>
  </div>
  </nav>
 </div>
    </header>
  );
};

export default Header;
