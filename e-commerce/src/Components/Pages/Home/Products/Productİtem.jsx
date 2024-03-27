/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./Productİtem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { MainContext } from "../../../../Context";
// eslint-disable-next-line react/prop-types
const Productİtem = ({ Clothesİtem }) => {
  const { name, img, img1, price, oldPrice } = Clothesİtem;
  const { addİtem, items, addFav, showİtem } = useContext(MainContext);

  return (
    <div className="product-card">
      <li className="item-card">
        <a href="#">
          <div className="image-wrapper">
            <img className="first-img" src={img} alt={name} />
            <img src={img1} alt={img1} className="second-img" />
          </div>
          <p className="item-name">{name}</p>
          <div className="price-wrapper">
            <span className="old-price">{oldPrice}₺ yerine</span>
            <span className="new-price">sadece {price}₺</span>
          </div>

          <ul className="icon-wrapper">
            <li className="icons">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showİtem(Clothesİtem);
                }}
              >
                <FontAwesomeIcon icon={faEye} />
              </a>
            </li>

            <li className="icons">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addİtem(Clothesİtem);
                }}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </li>

            <li className="icons">
              <button>
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={(e) => {
                    e.preventDefault();
                    addFav(Clothesİtem);
                  }}
                />
              </button>
            </li>
          </ul>
        </a>
      </li>
    </div>
  );
};

export default Productİtem;
