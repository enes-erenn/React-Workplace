// Packages
import React, { useState } from "react";
// Components
import Header from "./Layout/Header.js";
import Meals from "./Meals/Meals.js";
import Cart from "./Cart/Cart.js";
import CartProvider from "./store/CartProvider.js";

const MyMealsApp = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default MyMealsApp;
