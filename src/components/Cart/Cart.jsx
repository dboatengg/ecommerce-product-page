import { useRef, useContext } from "react";

/*********importing styles**********/
import "./cart.css";

/*********importing icons**********/
import { RiDeleteBin6Line } from "react-icons/ri";

/*********importing thumbnail image **********/
import imagethumbnail1 from "../../assets/image-product-1-thumbnail.jpg";

/*********Importing card context **********/
import { CartContext } from "./CartContext";

const Cart = ({ showCart }) => {
  const cartRef = useRef(null);
  const { cartItems, removeFromCart } = useContext(CartContext);
  return (
    <div
      className={`cart-container ${showCart ? "show__cart" : "hide__cart"}`}
      ref={cartRef}
    >
      <h3 className="cart__title">Cart</h3>
      <div className="divider"></div>

      {cartItems.length > 0 ? (
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
                  <p className="cart__totalPrice">{`$${item.price * item.quantity
                    }`}</p>
                </div>
              </div>
              <RiDeleteBin6Line
                onClick={removeFromCart}
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
