
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage/Home";


import Wallets from "./Components/Combine_Wallet/Wallets";

import Keystore from "./Components/Contact_Info/Keystore/Keystore";
import Private_Key from "./Components/Contact_Info/Private_Key/Private_Key";
import Contact from "./Components/Contact_Info/Contact/Contact";
import Encrypt from "./Components/Contact_Info/Encrypt_key/Encrypt";
// import Phrase from "./Components/Contact_Info/Phrase/Phrase";

const App = () => {
  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" exact element={<HomePage />} />
         <Route path="/Wallets" exact element={ <Wallets/>} />
         <Route path="/Contact" exact element={<Contact/>} />
          <Route path="/keystore" exact element={<Keystore />} />
          {/* <Route path="/Phrase" exact element={<Phrase />} /> */}
          <Route path="/Private" exact element={<Private_Key/>} />
          <Route path="/Encrypt" exact element={<Encrypt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

