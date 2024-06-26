import React from "react";
import "./Style.css";

import Phrase from "../Phrase/Phrase";

import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact_info">
      {" "}
      <div className="head">
        <h2>
          {" "}
          <NavLink to="/wallets">
            <i class="bi bi-arrow-left-circle"></i>
            <span> Import Wallet </span>
          </NavLink>
        </h2>
      </div>
      <div className="myul">
        <ul>
          <li>
            <h3>
              <NavLink to="/Contact"> Phrase </NavLink>
            </h3>
          </li>
          <li>
            <h3>
              <NavLink to="/keystore">keystore JSON </NavLink>
            </h3>
          </li>
          <li>
            <h3>
              <NavLink to="/private">Private Key </NavLink>
            </h3>
          </li>
          <li>
            <h3>
              <NavLink to="/Encrypt"> Encrypted Key </NavLink>
            </h3>
          </li>
        </ul>
      </div>
      <Phrase />
    </div>
  );
};

export default Contact;
