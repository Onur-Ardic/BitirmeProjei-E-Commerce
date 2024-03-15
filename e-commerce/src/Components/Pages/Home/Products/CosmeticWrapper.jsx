import cosmeticdata from "../../../../cosmetic";
import Cosmeticİtem from "./Cosmeticİtem";
import "./Product.css";

const CosmeticWrapper = () => {
  const cosmeticİtem = cosmeticdata.map((cosmetic) => (
    <Cosmeticİtem cosmetic={cosmetic} key={cosmetic.id} />
  ));

  return (
    <div className="products-wrapper container mx-auto mt-0 ">
      <h2 className="title">Güzelliğine Güzellik Kat</h2>
      <ul className="products-items">{cosmeticİtem}</ul>
    </div>
  );
};

export default CosmeticWrapper;
