import { useState } from "react";
import logo from "../../assets/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import avatar from "../../assets/image-avatar.png";
import "./style.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };
  const handleClickClose = () => {
    setMenuActive(false);
  };

  return (
    <div className="navbar container">
      <div className="navbar__left">
        <RxHamburgerMenu className="hamburger-btn" onClick={handleClick} />
        <a href="#">
          <img className="logo" src={logo} alt="" />
        </a>
        <div
          className={`navbar__menu-container ${
            menuActive ? "show__menu" : "hide__menu"
          }`}
        >
          <ul className="navbar__menu">
            <IoMdClose onClick={handleClickClose} className="close-btn" />
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar__right">
        <AiOutlineShoppingCart className="cart" />
        <img className="avatar" src={avatar} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
