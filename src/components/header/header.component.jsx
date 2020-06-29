import React, { useContext } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const { isCartHidden } = useContext(GlobalContext);
  return (
    <div className="header">
      <div className={`options`}>
        <Link className="option" to="/">
          SHOP
        </Link>
       
    </div>
  );
};

export default Header;
