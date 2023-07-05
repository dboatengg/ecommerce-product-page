import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/Cart/CartContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  function handleIconClick() {
    setShowCart((prevState) => !prevState); // toggle the showPopup state
  }

  return (
    <div className="App">
      <CartProvider>
        <Navbar handleIconClick={handleIconClick} setShowCart={setShowCart} />
        <Product />
        <Cart showCart={showCart} />
      </CartProvider>
    </div>
  );
}

export default App;
