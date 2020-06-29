import React, { useContext } from "react";


const CartIcon = () => {
  const { toggleCartHidden, cart } = useContext(GlobalContext);
  return (
    <div
      className="cart-icon"
      onClick={toggleCartHidden}
      // onMouseEnter={toggleCartHidden}
      // onMouseLeave={toggleCartHidden}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalCartItems(cart)}</span>
    </div>
  );
};

export default CartIcon;
