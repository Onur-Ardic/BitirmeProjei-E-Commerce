import technologydata from "../../../../technology";
import "./Product.css";
import Teknolojiİtem from "./Teknolojiİtem";

const Technology = () => {
  const teknolojiİtem = technologydata.map((teknoloji) => (
    <Teknolojiİtem teknoloji={teknoloji} key={teknoloji.id} />
  ));

  return (
    <div className="products-wrapper container mx-auto ">
      <h2 className="title">Yeni Teknolojileri Yakala</h2>
      <ul className="products-items">{teknolojiİtem}</ul>
    </div>
  );
};

export default Technology;
