import "./Cart.css";
import Cartİtem from "./Cartİtem";
import { useContext } from "react";
import { MainContext } from "../../../../Context";

const Cart = () => {
  const { closeCartHanlder, items, clearCart } = useContext(MainContext);
  const clothesCart = items.map((cartİtem) => (
    <Cartİtem cartİtem={cartİtem} key={cartİtem.id} />
  ));
  const closeButton = items?.length;
  return (
    <div className="cart-wrapper">
      <button className="close-btn" onClick={closeCartHanlder}>
        ✖
      </button>
      <h2 className="cart-title">Sepetim</h2>
      {clothesCart}
      {closeButton && (
        <div className="cart-buttons-wrapper">
          <button className="delete-btn" onClick={() => clearCart()}>
            Hepsini Temizle
          </button>
          <a href="#" className="basket-btn">
            Sepete Git
          </a>
        </div>
      )}
      {closeButton || (
        <p className="text-center bg-red-400">Sepetinizde ürün bulunmuyor</p>
      )}
    </div>
  );
};

export default Cart;
