import { FaTruckMoving } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

import "./styles/nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = ({searchbtn}) => {
  const [search, setSearch] = useState();

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="free">
        <div className="icon">
          <FaTruckMoving></FaTruckMoving>
        </div>
        <p>FREE Shiping when shopping upto $1000</p>
      </div>
      <div className="main_header">
        <div className="container">
          <div className="logo">
            <img src="/public/img/logo.svg" alt="logo" />
          </div>

          <div className="search_box">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search your Product... "
              autoComplete="off"
            />
            <button onClick={() => searchbtn(search)}>Search</button>
          </div>
          <div className="icon">
            {isAuthenticated && (
              <div className="account">
                <div className="user_icon">
                  <AiOutlineUser></AiOutlineUser>
                </div>
                <p>Hello {user.name}</p>
              </div>
            )}

            <div className="second_icon">
              <Link to="/" className="link">
                <AiOutlineHeart></AiOutlineHeart>
              </Link>
              <Link to="/cart" className="link">
                <BsBagCheck></BsBagCheck>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="link">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="auth">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                <CiLogout></CiLogout>
              </button>
            ) : (
              <button onClick={() => loginWithRedirect()}>
                <CiLogin></CiLogin>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
