import "./notification.css";

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// Find the product in the cart with the desired name
let product = cartItems.find(
  (item) => item.name === "Fall Limited Edition Sneakers"
);

// Get the quantity of the product
let quantity = product ? product.quantity : 0;

const Notification = () => {
  return (
    <div className="notification">{quantity > 0 ? <p>{quantity}</p> : ""}</div>
  );
};

export default Notification;
