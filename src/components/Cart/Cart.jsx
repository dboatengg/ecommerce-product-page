import { useState, useEffect, useRef } from "react";

/*********importing styles**********/
import "./cart.css";

/*********importing icons**********/
import { RiDeleteBin6Line } from "react-icons/ri";

/*********importing thumbnail image **********/
import imagethumbnail1 from "../../assets/image-product-1-thumbnail.jpg";

const Cart = ({ showCart }) => {
  const cartRef = useRef(null);

  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const handleDelete = () => {
    localStorage.clear();
  };

  /**********access quantity separately*********/
  let cartItem = JSON.parse(localStorage.getItem("cart")) || [];
  // Find the product in the cart with the desired name
  let product = cartItem.find(
    (item) => item.name === "Fall Limited Edition Sneakers"
  );
  // Get the quantity of the product
  let quantity = product ? product.quantity : 0;

  return (
    <div
      className={`cart-container ${showCart ? "show__cart" : "hide__cart"}`}
      ref={cartRef}
    >
      <h3 className="cart__title">Cart</h3>
      <div className="divider"></div>

      {quantity > 0 ? (
        <div className="cart__bottom">
          {cartItems.map((item, index) => (
            <div key={index} className="cart__product">
              <img
                className="cart__image"
                src={imagethumbnail1}
                alt={item.name}
              />
              <div className="cart__details">
                <p className="cart__name">{item.name}</p>
                <div className="cart__values">
                  <p>{`${item.price} x ${item.quantity}`}</p>
                  <p className="cart__totalPrice">{`$${
                    item.price * item.quantity
                  }`}</p>
                </div>
              </div>
              <RiDeleteBin6Line
                onClick={handleDelete}
                size={20}
                className="cart__delete"
              />
            </div>
          ))}
          <button className="cart__button">Checkout</button>
        </div>
      ) : (
        <div className="cart__bottom">Your cart is empty</div>
      )}
    </div>
  );
};

export default Cart;
