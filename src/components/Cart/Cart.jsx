import { useState } from "react";
import "./cart.css";

import { AiOutlineCloseCircle } from "react-icons/ai";
import image1 from "../../assets/image-product-1.jpg";

function Cart() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  function handleRemoveItem(itemIndex) {
    const newCartItems = [...cartItems];
    newCartItems.splice(itemIndex, 1);
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  }

  return (
    <div className="cart">
      <div className="cart__header">
        <h3>Shopping Cart</h3>
        <button onClick={() => setCartOpen(false)}>Close</button>
      </div>
      <div className="cart__items">
        {cartItems.map((item, index) => (
          <div className="cart__item" key={index}>
            <img src={image1} alt={item.name} className="cart__item-img" />
            <div className="cart__item-details">
              <h4>{item.name}</h4>
              <p>{`Quantity: ${item.quantity}`}</p>
              <p>{`Price: $${item.price}`}</p>
            </div>
            <button
              className="cart__item-remove"
              onClick={() => handleRemoveItem(index)}
            >
              <AiOutlineCloseCircle size={18} />
            </button>
          </div>
        ))}
      </div>
      <div className="cart__footer">
        <p>{`Total: $${cartItems.reduce(
          (acc, curr) => acc + curr.price * curr.quantity,
          0
        )}`}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
