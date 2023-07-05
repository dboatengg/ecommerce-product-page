import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log("dasdadad")
  useEffect(() => {
    // Load cart items from local storage on initial render
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);

    // Listen to changes in local storage and update cartItems
    const handleStorageChange = (event) => {
      if (event.key === "cart") {
        const updatedCartItems = JSON.parse(event.newValue) || [];
        setCartItems(updatedCartItems);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const addToCart = (product) => {
    // Update cartItems and localStorage
    const updatedCartItems = [...cartItems];
    const itemIndex = updatedCartItems.findIndex(
      (item) => item.name === product.name
    );

    if (itemIndex !== -1) {
      updatedCartItems[itemIndex].quantity += product.quantity;
    } else {
      updatedCartItems.push(product);
    }

    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (itemIndex) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(itemIndex, 1);

    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };


  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
