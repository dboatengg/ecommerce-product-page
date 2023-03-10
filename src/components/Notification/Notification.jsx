import "./notification.css";

const Notification = ({ quantity }) => {
  return (
    <div className="notification">
      <p>{quantity > 0 ? quantity : ""}</p>
    </div>
  );
};

export default Notification;
