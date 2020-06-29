import React, { useContext } from "react";
import { withRouter } from "react-router-dom";



const CartDropdown = ({ history }) => {
  const { toggleCartHidden, cart } = useContext(GlobalContext);
  return (
    <div
      className="cart-dropdown"
      // onMouseEnter={toggleCartHidden}
      // onMouseLeave={toggleCartHidden}
    >
      {cart.length ? (
        <div className="cart-items">
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

//withRouter passes the match and history props
export default withRouter(CartDropdown);
