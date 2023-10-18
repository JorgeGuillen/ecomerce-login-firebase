import {
  AiOutlineCloseCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import ProductDetail from "../data/productDetail";
import { BsEye } from "react-icons/bs";
import "./styles/product.css";

import { useAuth0 } from "@auth0/auth0-react";

const Product = ({
  product,
  setProduct,
  detail,
  view,
  close,
  setClose,
  addToCart,
}) => {


  
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const filterProduct = (product) => {
    const update = ProductDetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };

  const allProducts = () => {
    setProduct(ProductDetail);
  };

  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button className="closebtn" onClick={() => setClose(false)}>
              <AiOutlineCloseCircle></AiOutlineCloseCircle>
            </button>

            {detail.map((curElm) => {
              return (
                <>
                  <div className="productbox">
                    <div className="img-box">
                      <img src={curElm.Img} alt={curElm.Title} />
                    </div>
                    <div className="detail">
                      <h4>{curElm.Cat}</h4>
                      <h2>{curElm.Title}</h2>
                      <p>
                        A screen Everyone Will Love: Wheter your family is
                        streaming or video chatting with friends tablet A8{" "}
                      </p>
                      <h3> $ {curElm.Price}</h3>
                      <button>Add to Cart </button>
                    </div>
                  </div>
                </>
              );
            })}

            <div className="productbox"></div>
          </div>
        </div>
      ) : null}
      <div className="products">
        <h2># Product</h2>
        <p>Home . products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li onClick={() => allProducts()}>All Categories</li>
                <li onClick={() => filterProduct("Tablet")}>Tablet</li>
                <li onClick={() => filterProduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filterProduct("Headphone")}>Headphone</li>
                <li onClick={() => filterProduct("Camera")}>Camera</li>
                <li onClick={() => filterProduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {product.map((curElm) => {
                return (
                  <>
                    <div className="box" key={curElm.id}>
                      <div className="img_box">
                        <img src={curElm.Img} alt={curElm.Title} />
                        <div className="icon">
                          {isAuthenticated ? (
                            <li onClick={() => addToCart(curElm)}>
                              <AiOutlineShoppingCart></AiOutlineShoppingCart>
                            </li>
                          ) : (
                            <li onClick={() => loginWithRedirect()}>
                              <AiOutlineShoppingCart></AiOutlineShoppingCart>
                            </li>
                          )}

                          <li onClick={() => view(curElm)}>
                            <BsEye></BsEye>
                          </li>
                          <li>
                            <AiOutlineHeart></AiOutlineHeart>
                          </li>
                        </div>
                      </div>
                      <div className="detail">
                        <p>{curElm.Cat}</p>
                        <h3>{curElm.Title} </h3>
                        <h4>${curElm.Price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
