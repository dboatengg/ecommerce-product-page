import { useState } from "react";
import "./style.css";

/***********  importing icons**********/
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoDash } from "react-icons/go";

/*****  import images ******/
import image1 from "../../assets/image-product-1.jpg";
import imageThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import image2 from "../../assets/image-product-2.jpg";
import imageThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import image3 from "../../assets/image-product-3.jpg";
import imageThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import image4 from "../../assets/image-product-4.jpg";
import imageThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

function Product() {
  const [mainImage, setMainImage] = useState(image1);
  const [quantity, setQuantity] = useState(1);

  const images = [
    {
      id: 1,
      src: image1,
      thumbnail: imageThumbnail1,
    },
    {
      id: 2,
      src: image2,
      thumbnail: imageThumbnail2,
    },
    {
      id: 3,
      src: image3,
      thumbnail: imageThumbnail3,
    },
    {
      id: 4,
      src: image4,
      thumbnail: imageThumbnail4,
    },
  ];

  function handleClick(newImage) {
    setMainImage(newImage);
  }

  function handleQuantityChange(action) {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handlePrevImage() {
    const currentIndex = images.findIndex((image) => image.src === mainImage);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setMainImage(images[prevIndex].src);
  }

  function handleNextImage() {
    const currentIndex = images.findIndex((image) => image.src === mainImage);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setMainImage(images[nextIndex].src);
  }

  function handleAddToCart() {
    // Handle adding product to cart
  }

  return (
    <div className="product-container ">
      <div className="product-images">
        <img src={mainImage} className="main-image" alt="Main product image" />

        <div className="arrow-btn left" onClick={handlePrevImage}>
          &lt;
        </div>
        <div className="arrow-btn right" onClick={handleNextImage}>
          &gt;
        </div>

        <div className="image-thumbnails">
          {images.map((image) => (
            <img
              className="image-thumbnails__img"
              key={image.id}
              src={image.thumbnail}
              alt={`Thumbnail for product image ${image.id}`}
              onClick={() => handleClick(image.src)}
            />
          ))}
        </div>
      </div>

      <div className="product-details">
        <p className="ta">SNEAKER COMPANY</p>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <p className="price">$99.99</p>

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
