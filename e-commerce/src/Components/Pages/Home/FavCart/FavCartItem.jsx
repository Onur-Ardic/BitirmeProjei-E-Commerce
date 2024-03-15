/* eslint-disable react/prop-types */
const FavCartItem = ({ favCart }) => {
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

        <div className="icon">X</div>
      </div>
    </>
  );
};

export default FavCartItem;
