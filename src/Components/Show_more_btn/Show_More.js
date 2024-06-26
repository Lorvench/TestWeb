import React from "react";

import "../WalletPage_Apps/Style.css";
import "./Style.css";

import { useState } from "react";
import Showmore from "../showmore_2nd_apps/Showmore";
const Show_More = () => {
  const [click, setShow] = useState(false);

  const handle = () => {
    setShow(!click);
  };

  return (
    <div className="app_btn">
      {" "}
      <div>
        {" "}
        <div className="shows">
          <button onClick={handle} className="showmore_btn">
            {click ? (
              <h4>
                SHOW LESS <i class="bi bi-arrow-up"></i>
              </h4>
            ) : (
              <h4>
                SHOW MORE <i class="bi bi-arrow-down"></i>
              </h4>
            )}
          </button>
        </div>
        {click ? <Showmore /> : null}{" "}
      </div>
    </div>
  );
};

export default Show_More;
