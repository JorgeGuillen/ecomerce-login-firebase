import { Link } from "react-router-dom";
import { BsArrowRight, BsEye } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { CiPercent } from "react-icons/ci";
import { BiHeadphone } from "react-icons/bi";
import {
  AiOutlineCloseCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "./styles/home.css";
import Homeproduct from "../data/homeproduct";
import { useState } from "react";

const Home = ({ detail, view, close, setClose ,addToCart }) => {
  const [homeProduct, setHomeProduct] = useState(Homeproduct);

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

      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Collection 2023</h2>
            <Link to="/product" className="link">
              Shop Now <BsArrowRight></BsArrowRight>
            </Link>
          </div>

          <div className="img_box">
            <img src="/public/img/slider-img.png" alt="sliderimg" />
          </div>
        </div>
      </div>

      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src="/public/img/Mobile Phone.png" alt="mobile" />
            </div>
            <div className="detail">
              <p>23 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="/public/img/headphone.png" alt="headphone" />
            </div>
            <div className="detail">
              <p>52 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="/public/img/cpu heat.jpg" alt="cpu-heat" />
            </div>
            <div className="detail">
              <p>63 Products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="/public/img/smart watch.png" alt="smartwatch" />
            </div>
            <div className="detail">
              <p>18 Products</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FiTruck></FiTruck>
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Over above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BsCurrencyDollar></BsCurrencyDollar>
            </div>
            <div className="detail">
              <h3>Return and Refund</h3>
              <p>Money Back Guarenty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <CiPercent></CiPercent>
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On every oder</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <BiHeadphone></BiHeadphone>
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>Every time Call support </p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {homeProduct.map((curElm) => {
            return (
              <div className="box" key={curElm.id}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title} />
                  <div className="icon">
                    <li onClick={() => addToCart(curElm)}>
                      <AiOutlineShoppingCart></AiOutlineShoppingCart>
                    </li>
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
            );
          })}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4> Latest Technology Added </h4>
            <h3> Apple iPad 10.2 9th Gen - 2021 </h3>
            <p>
              <BsCurrencyDollar></BsCurrencyDollar>986
            </p>
            <Link className="link" to="/product">
              Shop Now <BsArrowRight></BsArrowRight>
            </Link>
          </div>
          <div className="img_box">
            <img src="/public/img/slider-img.png" alt="sliderImg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
