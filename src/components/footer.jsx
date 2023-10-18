import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import "./styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="/public/img/logo.svg" alt="logo" />
            </div>
            <div className="detail">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore fugiat quo dolorem odio quis? Repella
              </p>
              <div className="icon">
                <li>
                  <RiFacebookFill></RiFacebookFill>
                </li>
                <li>
                  <AiOutlineInstagram></AiOutlineInstagram>
                </li>
                <li>
                  <AiOutlineTwitter></AiOutlineTwitter>
                </li>
                <li>
                  <BsYoutube></BsYoutube>
                </li>
              </div>
            </div>
          </div>

          <div className="account">
            <h3>My Account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>Return</li>
            </ul>
          </div>

          <div className="page">
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>ABout</li>
              <li>Contact</li>
              <li>Terms & conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
