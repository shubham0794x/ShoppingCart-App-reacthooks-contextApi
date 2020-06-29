import React from "react";

const CheckoutItem = ({ cartItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    const { addItem, deleteItem, clearItem } = useContext(GlobalContext);
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => deleteItem(cartItem.id)}>
                    &#10094;
        </div>
                
      </div>
        </div>
    );
};

export default CheckoutItem;
