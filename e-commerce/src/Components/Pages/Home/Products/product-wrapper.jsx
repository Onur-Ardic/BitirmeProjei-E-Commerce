import clothesdata from "../../../../clothes";
import Productİtem from "./Productİtem";
import "./Product.css";

const Product = () => {
  const clothesİtem = clothesdata.map((Clothesİtem) => (
    <Productİtem Clothesİtem={Clothesİtem} key={Clothesİtem.id} />
  ));
  return (
    <div className="products-wrapper container mx-auto pt-8">
      <h2 className="title">Tarzını Yeni Sezonla Keşfet</h2>
      <ul className="products-items">{clothesİtem}</ul>
    </div>
  );
};

export default Product;
