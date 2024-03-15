/* eslint-disable react/prop-types */
import {
  faCartShopping,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { MainContext } from "../../../../Context";

const Cosmeticİtem = ({ cosmetic }) => {
  const { name, price, oldPrice, img, img1 } = cosmetic;
  const { addİtem, addFav } = useContext(MainContext);
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
              <a href="#">
                <FontAwesomeIcon icon={faEye} />
              </a>
            </li>

            <li className="icons">
              <button href="#">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  onClick={() => addİtem(cosmetic)}
                />
              </button>
            </li>

            <li className="icons">
              <button>
                <FontAwesomeIcon
                  icon={faHeart}
                  onClick={() => addFav(cosmetic)}
                />
              </button>
            </li>
          </ul>
        </a>
      </li>
    </div>
  );
};

export default Cosmeticİtem;
