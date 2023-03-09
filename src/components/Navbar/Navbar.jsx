import { useState, useRef, useEffect } from "react";

/*********  importing images  ***********/
import logo from "../../assets/logo.svg";
import avatar from "../../assets/image-avatar.png";

/*********  importing icons  ***********/
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import "./navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };
  const handleClickClose = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    menuActive &&
      document.addEventListener("mousedown", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [menuActive]);

  const handleClickOutsideMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuActive(false);
    }
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
          <ul className="navbar__menu" ref={menuRef}>
            <IoMdClose onClick={handleClickClose} className="close-btn" />
            <li>
              <a onClick={handleClickClose} href="#">
                Collections
              </a>
            </li>
            <li>
              <a onClick={handleClickClose} href="#">
                Men
              </a>
            </li>
            <li>
              <a onClick={handleClickClose} href="#">
                Women
              </a>
            </li>
            <li>
              <a onClick={handleClickClose} href="#">
                About
              </a>
            </li>
            <li>
              <a onClick={handleClickClose} href="#">
                Contact
              </a>
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
