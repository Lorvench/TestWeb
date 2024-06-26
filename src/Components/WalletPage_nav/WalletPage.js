import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";
const WalletPage = () => {
  return (
    <div className="WalletPage">
      <nav>
        <ul>
          <li>
            <b>
              <NavLink to="/">Home </NavLink>
            </b>
          </li>
          <li>
            <b>
              {" "}
              <NavLink to="https://docs.walletconnect.com/">Docs</NavLink>
            </b>
          </li>

          <li>
            {" "}
            <NavLink to="/">
              <img alt="logoo" src="https://i.pinimg.com/736x/b0/b0/eb/b0b0eb85850a8f42e17eb84c56564460.jpg" />
            </NavLink>
          </li>

          <li>
            {" "}
            <b>
              <NavLink to="#">Wallets</NavLink>
            </b>
          </li>
          <li>
            {" "}
            <b>
              <NavLink to="/Contact_info">Connect</NavLink>
            </b>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default WalletPage;
