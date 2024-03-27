/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-case-declarations */
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
  const [isClass, setİsclass] = useState(false);

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
        let updatedİtems = [...state?.items];
        updatedİtems = [...state.items, action.item];
        return {
          items: updatedİtems,
        };

      case "REMOVE":
        let filteredİtem = state.items.filter((item) => item.id !== action.id);
        return {
          items: filteredİtem,
        };

      case "CLEAR":
        return defaultCartState;

      default:
        return state;
    }
  };

  const defaultCartState = {
    items: [],
  };

  const defaultFavState = {
    favitems: [],
  };

  const favReducer = (state, action) => {
    switch (action.type) {
      case "ADDFAV":
        let favİtemUpdate = [...state?.favitems];
        favİtemUpdate = [...state.favitems, action.favitem];
        return {
          favitems: favİtemUpdate,
        };

      case "REMOVEFAV":
        let uptadefFavİtems = state?.favitems.filter(
          (item) => item.id !== action.id
        );
        return uptadefFavİtems;

      case "CLEARFAV":
        return defaultFavState;

      default:
    }
  };

  const [cartFav, dispatchFavAction] = useReducer(favReducer, defaultFavState);

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
    favitems: cartFav.favitems,
    isClass,
    setİsclass,
    addİtem: (item) => {
      dispatchCartAction({ type: "ADD", item });
    },
    removeİtem: (id) => {
      dispatchCartAction({ type: "REMOVE", id });
    },
    clearCart: () => {
      dispatchCartAction({ type: "CLEAR" });
    },
    addFav: (favitem) => {
      dispatchFavAction({ type: "ADDFAV", favitem });
    },
    removeFav: (id) => {
      dispatchFavAction({ type: "REMOVEFAV", id });
    },
    clearFav: () => {
      dispatchFavAction({ type: "CLEARFAV" });
    },
    showİtem: (show) => {
      const showProduct = show;
      console.log(showProduct);
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
