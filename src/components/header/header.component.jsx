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
        <span className="option">
          <CartIcon />
        </span>
      </div>
      {isCartHidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
