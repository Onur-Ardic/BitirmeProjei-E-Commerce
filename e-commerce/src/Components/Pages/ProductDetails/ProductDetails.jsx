import { useContext } from "react";
import { MainContext } from "../../../Context";

const ProductDetails = () => {
  const { showProduct } = useContext(MainContext);
  console.log(showProduct);
  return (
    <>
      <div className="product-details">
        <div className="container mx-auto">
          <div className="product-img">
            <img
              src="https://images.unsplash.com/photo-1600000000000-0000000000000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
