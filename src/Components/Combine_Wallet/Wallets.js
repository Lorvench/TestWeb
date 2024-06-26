import React from "react";
// import Contact_Info from "../Contact_Info/Contact_Info";
import WalletPage from "../WalletPage_nav/WalletPage";
import WalletPage_txt from "../WalletPage_txt/WalletPage_txt";
import Wallet_Apps from "../WalletPage_Apps/Wallet_Apps";

const Wallets = () => {
  return (
    <div className="combine_wall">
      <WalletPage />
      <WalletPage_txt />
      <Wallet_Apps />
    </div>
  );
};

export default Wallets;
