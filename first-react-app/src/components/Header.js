/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../img/logo.png";
import "../css/header.css";

const Header = () => {
  return (
    <div>
      <div className="main-header">
        <header>
          <div className="logo-div">
            <img src={Logo} alt="logo_image" id="logo" />

          </div>

          <div>

          <nav>

                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>

        </nav>
          </div>

           
        
        </header>
      </div>
    </div>
  );
};

export default Header;
