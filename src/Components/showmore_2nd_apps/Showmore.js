import React from "react";
import "./Showmore.css";
import { NavLink } from "react-router-dom";

import Show_more from "../Data/Show_more.json";
const Showmore = () => {
  return (
    <div className="Apps_page">
      {Show_more.map((app) => (
        <div className="app_cont_each">
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
    </div>
  );
};

export default Showmore;
