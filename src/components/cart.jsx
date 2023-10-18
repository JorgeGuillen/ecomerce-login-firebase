import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./styles/cart.css";

const Cart = ({ cart, setCart }) => {
  //increase qty

  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm;
      })
    );
  };

  //dec qty

  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty - 1 }
          : curElm;
      })
    );
  };

  //remove product

  const removeProduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };

  //totalprice

  const totalprice = cart.reduce((price, item) => price + item.qty * item.Price, 0)

  return (
    <>
      <div className="cartcontainer">
        {cart.length === 0 && (
          <div className="emptycart">
            <h2 className="empty">Cart is empty</h2>
            <Link className="emptycartbtn" to="/product">
              Shop Now{" "}
            </Link>
          </div>
        )}
        <div className="contant">
          {cart.map((curElm) => {
            return (
              <>
                <div className="cart_item">
                  <div className="img_box">
                    <img src={curElm.Img} alt={curElm.Title} />
                  </div>
                  <div className="detail">
                    <div className="info">
                      <h4>{curElm.Cat}</h4>
                      <h3>{curElm.Title}</h3>
                      <p>Price: ${curElm.Price}</p>

                      <div className="qty">
                        <button
                          className="incqty"
                          onClick={() => incqty(curElm)}
                        >
                          +
                        </button>
                        <input type="text" value={curElm.qty}></input>
                        <button
                          className="decqty"
                          onClick={() => decqty(curElm)}
                        >
                          -
                        </button>
                      </div>

                      <h4 className="subtotal"  >Sub Total: $ {curElm.Price * curElm.qty} </h4>
                    </div>
                    <div className="close">
                      <button onClick={() => removeProduct(curElm)}>
                        <AiOutlineClose></AiOutlineClose>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {cart.length > 0 && (
          <>
            <h2 className="totalprice">Total:  ${totalprice}</h2>
            <button className="checkout">CheckOut</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
