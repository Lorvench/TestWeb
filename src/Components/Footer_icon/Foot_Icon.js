import React from "react";
import "../Footer_icon/Foot_icon.css";
const Foot_Icon = () => {
  return (
    <div className="show_icons">
      <span>
        <a href="#">
          <i class="bi bi-discord"></i> Discord
        </a>
      </span>
      <span>
        {" "}
        <a href="#">
          <i class="bi bi-telegram"></i> Telegram
        </a>
      </span>
      <span>
        <a href="#">
          {" "}
          <i class="bi bi-twitter"></i> Twitter{" "}
        </a>
      </span>
      <span>
        <a href="#">
          {" "}
          <i class="bi bi-github"></i> Github{" "}
        </a>
      </span>
    </div>
  );
};

export default Foot_Icon;
