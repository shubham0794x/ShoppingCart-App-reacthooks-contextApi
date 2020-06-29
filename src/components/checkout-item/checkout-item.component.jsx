import React from "react";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const { addItem, deleteItem, clearItem } = useContext(GlobalContext);
  return (
            
  );
};

export default CheckoutItem;
