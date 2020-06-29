import React, { useContext } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const { isCartHidden } = useContext(GlobalContext);
  return (
    <div className="header">
      <div className={`options`}>
        
    </div>
  );
};

export default Header;
