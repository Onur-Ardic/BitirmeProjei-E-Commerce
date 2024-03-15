import "./Favcart.css";
import FavCartItem from "./FavCartItem";
import { useContext } from "react";
import { MainContext } from "../../../../Context";
const FavCart = () => {
  const { closeFavCartHandler, favitems } = useContext(MainContext);
  const favİtem = favitems.map((favCart) => (
    <FavCartItem favCart={favCart} key={favCart.id} />
  ));
  return (
    <div className="cart-wrapper-fav">
      <h2 className="addFavTitle">Favorilerim</h2>
      <div className="fav-close">
        <button onClick={closeFavCartHandler}>X</button>
      </div>
      {favİtem}

      <div className="cart-buttons-wrapper">
        <button className="delete-btn">Hepsini Temizle</button>
        <a href="#" className="basket-btn">
          Sepete Git
        </a>
      </div>
    </div>
  );
};

export default FavCart;
