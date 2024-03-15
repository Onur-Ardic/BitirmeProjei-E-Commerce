/* eslint-disable react/prop-types */
const Cartİtem = ({ cartİtem }) => {
  const { name, price, img } = cartİtem;
  return (
    <>
      <div className="cart-item">
        <div className="img">
          <img src={img} alt={name} />
        </div>

        <div className="text">
          <h4>{name}</h4>
          <p className="amount text-end">{price}TL</p>
        </div>

        <div className="delete">X</div>
      </div>
    </>
  );
};

export default Cartİtem;
