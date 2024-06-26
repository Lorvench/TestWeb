import React from "react";
import "../WalletPage_Apps/Style.css";
import Data from "../Data/Data.json";

// import WalletPage from "../WalletPage_nav/WalletPage";

import { NavLink } from "react-router-dom";
import Show_More from "../Show_more_btn/Show_More";
import Foot_Icon from "../Footer_icon/Foot_Icon";
const Wallet_Apps = () => {
  return (
    <div className="Apps_page">
      {Data.map((app) => (
        <div className="app_cont_each">
          {" "}
          <NavLink to="/Contact">
            <div className="app_img">
              <img src={app.img} alt={app.name} />
            </div>

            <div className="app">
              {" "}
              <h4>{app.name}</h4>
            </div>
          </NavLink>
        </div>
      ))}
      {/* <div className="sharing_comps"> */}
      <Show_More />
      <Foot_Icon/>
      {/* </div> */}
    </div>
  );
};

export default Wallet_Apps;
