import { useContext } from "react";
import { MainContext } from "../../../../Context";

/* eslint-disable react/prop-types */
const FavCartItem = ({ favCart }) => {
  const { removeFav } = useContext(MainContext);
  const { name, price, img } = favCart;
  return (
    <>
      <div className="fav-items">
        <div className="img">
          <img src={img} alt={name} />
        </div>

        <div className="cart-item">
          <h3 className="name">{name}</h3>
          <p className="price">{price}TL</p>
        </div>

        <div
          className="icon"
          onClick={(e) => {
            e.preventDefault();
            removeFav(favCart.id);
          }}
        >
          X
        </div>
      </div>
    </>
  );
};

export default FavCartItem;
