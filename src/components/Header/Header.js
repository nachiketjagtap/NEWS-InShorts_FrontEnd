import React from "react";
import Menuicon from "../Menuicon";

const Header = ({ setcategory }) => {
  return (
    <div>
      <div className="inshorts-header">
        <div className="icon">
          <Menuicon setcategory={setcategory}></Menuicon>
        </div>
        <img
          style={{ cursor: "pointer", paddingTop: "0.5rem" }}
          src="/NEWS-InShorts-Logo.gif"
          height="100%"
          width="20%"
          alt="inshorts-logo"
        /> 

      
      </div>
    </div>
  );
};

export default Header;
