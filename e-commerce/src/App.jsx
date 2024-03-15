import "./App.css";
import { useReducer, useState } from "react";
import Header from "./Components/Pages/Home/Header/Header";
import { MainContext } from "./Context";
import ModalMenu from "./Ui/Modal";
import HeroContainer from "./Components/Pages/Home/Hero/HeroContainer";
import Product from "./Components/Pages/Home/Products/product-wrapper";
import Technology from "./Components/Pages/Home/Products/technology";
import Banner from "./Components/Pages/Home/Banner/Banner";
import CosmeticWrapper from "./Components/Pages/Home/Products/CosmeticWrapper";
import Slider from "./Components/Pages/Home/Slider/Slider";
import BlogsWrapper from "./Components/Pages/Home/Blogs/BlogsWrapper";
import Footer from "./Components/Pages/Home/Footer/Footer";
import Cart from "./Components/Pages/Home/Cart/Cart";
import FavCart from "./Components/Pages/Home/FavCart/FavCart";

function App() {
  const [email, setEmail] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartShow, setCartİsShow] = useState(false);
  const [cartFavShow, setCartFavShow] = useState(false);

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const showCartHanlder = () => {
    setCartİsShow(true);
  };

  const closeCartHanlder = () => {
    setCartİsShow(false);
  };

  const cartShowHandler = () => {
    setCartFavShow(true);
  };

  const favCartHandler = () => {
    setCartFavShow(true);
  };

  const closeFavCartHandler = () => {
    setCartFavShow(false);
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        let updatedİtems = [...state.items];
        updatedİtems = [...state.items, action.item];
        return {
          items: updatedİtems,
        };

      case "ADDFAV":
        let favİtemsUpdate = [...state.favitems];
        favİtemsUpdate = [...state.favitems, action.favitem];
        return {
          favitems: favİtemsUpdate,
        };
      case "REMOVE":
        return state;

      case "CLEAR":
        return state;

      default:
        return state;
    }
  };

  const defaultCartState = {
    items: [],
    favitems: [],
  };

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const data = {
    email,
    setEmail,
    openModal,
    setOpenModal,
    isModalOpen,
    setIsModalOpen,
    handleIconClick,
    showCartHanlder,
    closeCartHanlder,
    cartShowHandler,
    favCartHandler,
    closeFavCartHandler,
    items: cartState.items,
    favitems: cartState.favitems,
    addİtem: (item) => {
      {
        dispatchCartAction({ type: "ADD", item });
      }
    },
    removeİtem: () => {},
    clearCart: () => {},
    addFav: (favitem) => {
      dispatchCartAction({ type: "ADDFAV", favitem });
    },
  };

  return (
    <MainContext.Provider value={data}>
      <ModalMenu open={isModalOpen} setIsModal={setIsModalOpen} />
      <Header />
      <HeroContainer />
      <Product />
      <Technology />
      <Banner />
      <CosmeticWrapper />
      <Slider />
      <BlogsWrapper />
      {cartShow && <Cart />}
      <Footer />
      {cartFavShow && <FavCart />}
    </MainContext.Provider>
  );
}

export default App;
