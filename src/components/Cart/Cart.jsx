import { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./cart.css";

const Cart = ({ showCart }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  return (
    <div className={`cart-container ${showCart ? "show__cart" : "hide__cart"}`}>
      <h3 className="cart__title">Cart</h3>
      <hr />
      <div className="cart__bottom">
        {cartItems.map((item, index) => (
          <div key={index} className="cart__product">
            <img className="cart__image" src={item.img} alt={item.name} />
            <div className="cart__details">
              <p>{item.name}</p>
              <div className="cart__values">
                <p>{`${item.price} x ${item.quantity}`}</p>
                <p className="cart__totalPrice">{`$${
                  item.price * item.quantity
                }`}</p>
              </div>
            </div>
            <RiDeleteBin6Line size={20} className="cart__delete" />
          </div>
        ))}
        <button className="cart__button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
