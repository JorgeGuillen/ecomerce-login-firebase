import Nav from "./components/nav";
import { BrowserRouter } from "react-router-dom";
import Rout from "./components/rout";
import Footer from "./components/footer";
import ProductDetail from "./data/productDetail";
import { useState } from "react";

const App = () => {
  //add to cart
  const [cart, setCart] = useState([]);

  //close window
  const [close, setClose] = useState(true);

  //Product Detail

  const [detail, setDetail] = useState([]);

  //filter Product
  const [product, setProduct] = useState(ProductDetail);

  const searchbtn = (product) => {
    const change = ProductDetail.filter((x) => {
      return x.Cat.toLowerCase() === product.toLowerCase();
    });
    setProduct(change);
  };

  //product detail

  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };

  // add to cart

  const addToCart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This Prodcut is already to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("product is added to cart ");
    }
  };

  
console.log(cart)


  return (
    <BrowserRouter>
      <Nav searchbtn={searchbtn}></Nav>
      <Rout
        product={product}
        setProduct={setProduct}
        detail={detail}
        view={view}
        close={close}
        setClose={setClose}
        cart={cart}
        setCart={setCart}
        addToCart={addToCart}
      ></Rout>
      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
