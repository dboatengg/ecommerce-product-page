import { useState, useRef } from "react";
import "./product.css";

/*********  importing components ***********/
import Cart from "../Cart/Cart";

/***********  importing icons**********/
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoDash } from "react-icons/go";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

/****import product images */
import { images } from "./product-image";
import image1 from "../../assets/image-product-1.jpg";

function Product() {
  const [mainImage, setMainImage] = useState(image1);
  const [quantity, setQuantity] = useState(0);
  const [selectedImageId, setSelectedImageId] = useState(1);
  const mainImageRef = useRef(null);

  //set clicked image as main image
  function handleClick(newImage) {
    setMainImage(newImage);
    setSelectedImageId(images.find((image) => image.src === newImage).id);

    /*****Add animation when image changes */
    const mainImageElement = mainImageRef.current;
    mainImageElement.classList.add("fade-out");
    setTimeout(() => {
      mainImageElement.classList.remove("fade-out");
    }, 200);
  }

  //increase and decrease product counter
  function handleQuantityChange(action) {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  //go to previous image
  function handlePrevImage() {
    const currentIndex = images.findIndex((image) => image.src === mainImage);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setMainImage(images[prevIndex].src);
  }

  //go to next image
  function handleNextImage() {
    const currentIndex = images.findIndex((image) => image.src === mainImage);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setMainImage(images[nextIndex].src);
  }

  function handleAddToCart() {
    const product = {
      name: "Fall Limited Edition Sneakers",
      price: 125,
      quantity: quantity,
    };

    // Check if there's already a cart in local storage
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product is already in cart
    let itemIndex = cartItems.findIndex((item) => item.name === product.name);

    // If product is already in cart, update quantity
    if (itemIndex !== -1) {
      cartItems[itemIndex].quantity += product.quantity;
    } else {
      cartItems.push(product);
    }

    // Save updated cart to local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    setQuantity(0);
  }

  return (
    <div className="product-container ">
      <div className="product-images">
        <div className="product-images__container">
          <img
            src={mainImage}
            className="main-image"
            alt="Main product image"
            ref={mainImageRef}
          />
          <div className="arrow-btn">
            <div className="left" onClick={handlePrevImage}>
              <MdOutlineArrowBackIosNew />
            </div>
            <div className="right" onClick={handleNextImage}>
              <MdOutlineArrowForwardIos />
            </div>
          </div>
        </div>

        {/* display image thumbnails  */}
        <div className="image-thumbnails">
          {images.map((image) => (
            <img
              className={`image-thumbnails__img ${
                image.id === selectedImageId ? "selected-thumbnail" : ""
              }`}
              key={image.id}
              src={image.thumbnail}
              alt={`Thumbnail for product image ${image.id}`}
              onClick={() => handleClick(image.src)}
            />
          ))}
        </div>
      </div>

      <div className="product-details">
        <p className="product__tag">SNEAKER COMPANY</p>
        <h2 className="product__title">Fall Limited Edition Sneakers</h2>
        <p className="product__text">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          <div className="price__container">
            <h3 className="price__main">$125.00</h3>
            <p className="price__discount">50%</p>
          </div>
          <h3 className="price__cancelled">$225.00</h3>
        </div>

        <div className="product-select">
          <div className="quantity-selector">
            <button
              className="decrease-btn"
              onClick={() => handleQuantityChange("decrease")}
            >
              <GoDash />
            </button>
            <span>{quantity}</span>
            <button
              className="increase-btn"
              onClick={() => handleQuantityChange("increase")}
            >
              +
            </button>
          </div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            <AiOutlineShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
