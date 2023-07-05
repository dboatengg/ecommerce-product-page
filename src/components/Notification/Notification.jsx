import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import "./notification.css";


const Notification = () => {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.quantity;
  }, 0);

  return (
    <div className="notification">{totalQuantity > 0 ? <p>{totalQuantity}</p> : ""}</div>
  );
};

export default Notification;
