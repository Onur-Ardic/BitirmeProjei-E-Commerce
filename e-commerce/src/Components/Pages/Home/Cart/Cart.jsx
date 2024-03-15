import "./Cart.css";
import Cartİtem from "./Cartİtem";
import { useContext } from "react";
import { MainContext } from "../../../../Context";

const Cart = () => {
  const { closeCartHanlder, items } = useContext(MainContext);

  const clothesCart = items.map((cartİtem) => (
    <Cartİtem cartİtem={cartİtem} key={cartİtem.id} />
  ));
  return (
    <div className="cart-wrapper">
      <button className="close-btn" onClick={closeCartHanlder}>
        ✖
      </button>
      <h2 className="cart-title">Sepetim</h2>

      {clothesCart}

      <div className="cart-buttons-wrapper">
        <button className="delete-btn">Hepsini Temizle</button>
        <a href="#" className="basket-btn">
          Sepete Git
        </a>
      </div>
    </div>
  );
};

export default Cart;
