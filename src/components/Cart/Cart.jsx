import { useState, useEffect, useRef } from "react";

/*********importing styles**********/
import "./cart.css";

/*********importing icons**********/
import { RiDeleteBin6Line } from "react-icons/ri";

/*********importing thumbnail image **********/
import imagethumbnail1 from "../../assets/image-product-1-thumbnail.jpg";

/*********importing custom hook **********/
import { useOutsideClick } from "../../CustomHook/useOutsideClick";

const Cart = ({ showCart, setShowCart }) => {
  const cartRef = useRef(null);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  /*******close cart menu when users click outside of it*********/
  useOutsideClick(cartRef, () => {
    setShowCart(false);
  });

  return (
    <div
      className={`cart-container ${showCart ? "show__cart" : "hide__cart"}`}
      ref={cartRef}
    >
      <h3 className="cart__title">Cart</h3>
      <hr />

      <div className="cart__bottom">
        {cartItems.map((item, index) => (
          <div key={index} className="cart__product">
            <img
              className="cart__image"
              src={imagethumbnail1}
              alt={item.name}
            />
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
