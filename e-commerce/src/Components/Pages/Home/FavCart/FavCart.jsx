import "./Favcart.css";
import FavCartItem from "./FavCartItem";
import { useContext } from "react";
import { MainContext } from "../../../../Context";
const FavCart = () => {
  const { closeFavCartHandler, favitems, clearFav } = useContext(MainContext);
  const favİtem = favitems?.map((favCart) => (
    <FavCartItem favCart={favCart} key={favCart.id} />
  ));

  const favAmount = favİtem?.length > 0;

  return (
    <div className="cart-wrapper-fav">
      <h2 className="addFavTitle">Favorilerim</h2>
      <div className="fav-close">
        <button onClick={closeFavCartHandler}>X</button>
      </div>
      {favİtem}

      {favAmount && (
        <div className="cart-buttons-wrapper">
          <button className="delete-btn" onClick={() => clearFav()}>
            Hepsini Temizle
          </button>
        </div>
      )}

      {favAmount || (
        <p className="fav-cart-text text-center bg-green-400 mt-5 text-sm">
          Favorilerinizde ürün bulunmamaktadır.
        </p>
      )}
    </div>
  );
};

export default FavCart;
