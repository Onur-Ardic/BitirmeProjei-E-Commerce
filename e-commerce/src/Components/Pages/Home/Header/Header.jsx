import { useContext } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import MegaMenu from "./MegaMenu";

import { MainContext } from "../../../../Context";

// function
const Header = () => {
  const { handleIconClick, showCartHanlder, favCartHandler } =
    useContext(MainContext);
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <a href="#">
              <h1>Collection Store</h1>
            </a>
          </div>

          <div className="links">
            <ul className="navbar-item">
              <li className="navbar-items">
                <a href="#">Anasayfa</a>
              </li>
              <li className="navbar-items" id="mega">
                <a href="#">Mağaza</a>

                <MegaMenu />
              </li>
              <li className="navbar-items">
                <a href="#">Blog</a>
              </li>
              <li className="navbar-items">
                <a href="#">İletişim</a>
              </li>
            </ul>
          </div>

          <div className="icons">
            <button>
              <FontAwesomeIcon icon={faUser} onClick={handleIconClick} />
            </button>

            <button>
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: "#ff0000" }}
                onClick={favCartHandler}
              />
            </button>

            <button>
              <FontAwesomeIcon
                icon={faCartShopping}
                onClick={showCartHanlder}
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
