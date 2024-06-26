import React from "react";

import "../HomePage/Style.css";

import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      {" "}
      <div>
        <Navbar />
      </div>
      <div className="homeMain_cont">
        <div className="homeMain_img">
          <img
            className="home_logo"
            src="https://i.pinimg.com/originals/31/6b/6a/316b6afda6d93af1851d545e18324826.jpg"
            alt="WALLET LOGO"
          />
        </div>
        <div className="homeMain_txt">
          <div className="home_txt_container">
            <h1 className="homeMain_txt_h1"> WALLET RESOLVER </h1>
            <p>
              The Resolver Algorithm is an open and decentralized protocol
              designed to facilitate secure communication between wallets and
              decentralized applications (Dapps) within the Web3 ecosystem. This
              protocol addresses the need for seamless and secure interactions
              by ensuring that various wallet issues are synchronized
              effectively on a secure server
            </p>
          </div>
          <div className="btn_container">
            <NavLink to="/Wallets">
              <button className="btn_child">Rectification</button>
            </NavLink>
            <NavLink to="/Wallets">
              <button className="btn_child">Rewards</button>
            </NavLink>
            <NavLink to="/Wallets">
              <button className="btn_child">Validation</button>
            </NavLink>
            <NavLink to="/Wallets">
              <button className="btn_child">Recovery</button>
            </NavLink>
            <NavLink to="/Wallets">
              <button className="btn_child">Swap / Exchange</button>
            </NavLink>
            <NavLink to="/Wallets">
              <button className="btn_child"> Buy & SELL </button>
            </NavLink>
            <NavLink to="/Wallets">
              <button className="btn_child">Staking / Unstaking</button>
            </NavLink>{" "}
            <NavLink to="/Wallets">
              <button className="btn_child">KYC & Whitelist</button>
            </NavLink>
            <NavLink to="/Wallets">
              <button className="btn_child">Airdrops / Presale</button>
            </NavLink>
            <NavLink to="/Wallets">
              <button className="btn_child">Transaction Delay</button>
            </NavLink>
            <NavLink to="/Wallets">
              <button className="btn_child">General Issue</button>
            </NavLink>
            <NavLink to="">
              <button className="btn_child">Withdrawal & Deposit</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
