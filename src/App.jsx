import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  function handleIconClick() {
    setShowCart((prevState) => !prevState); // toggle the showPopup state
    console.log(showCart);
  }

  return (
    <div className="App">
      <Navbar handleIconClick={handleIconClick} setShowCart={setShowCart} />
      <Product />
      <Cart showCart={showCart} />
    </div>
  );
}

export default App;
