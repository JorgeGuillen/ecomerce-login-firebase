import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Product from "./product";
import Cart from "./cart";
import Contact from "./contact";

const Rout = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  cart,
  setCart,
  addToCart,
}) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
              addToCart={addToCart}
            ></Home>
          }
        ></Route>
        <Route
          path="/product"
          element={
            <Product
              product={product}
              setProduct={setProduct}
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
              setCart={setCart}
              addToCart={addToCart}
            ></Product>
          }
        ></Route>
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart}></Cart>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </>
  );
};

export default Rout;
