import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart2, setShowCart] = useState(false);
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(cartItem => cartItem.id === item.id);
      if (itemExists) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter(cartItem => cartItem.id !== itemId)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, showCart2, setShowCart }}>
      {children}
    </CartContext.Provider>
  );
};
