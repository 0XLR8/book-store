import { createContext, useState } from "react";
import { TypeBook, TypeCartItem } from "../types/types";

type TypeCartContext = {
  cartItems: TypeCartItem[];
  handleAddToCart: (item: TypeBook) => void;
  isCartExpanded: boolean;
  setIsCartExpanded: (isCartExpanded: boolean) => void;
  handleIncreaseCart: (id: number) => void;
  handleDecreaseCart: (id: number) => void;
  handleDeleteCart: (id: number) => void;
};

export const CartContext = createContext<TypeCartContext>({
    cartItems: [],
    handleAddToCart: () => {},
    isCartExpanded: false,
    setIsCartExpanded: () => {},
    handleIncreaseCart: () => {},
    handleDecreaseCart: () => {},
    handleDeleteCart: () => {}
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<TypeCartItem[]>([]);
  const [isCartExpanded, setIsCartExpanded] = useState<boolean>(false);

  const handleAddToCart = (item: TypeBook) => {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find((cart) => cart.id === item.id);

      if (existingItem) {
        return prevCartItems.map((cart) =>
          cart.id === item.id ? { ...cart, count: cart.count + 1 } : cart
        );
      }

      return [...prevCartItems, { ...item, count: 1 }];
    });
  };

  const handleIncreaseCart = (id: number) => {
    setCartItems(prevCartItems => 
        prevCartItems.map(item => 
            item.id === id ? {...item, count: item.count + 1} : item
        )
    )
  }

  const handleDecreaseCart = (id: number) => {
    setCartItems(prevCartItems => 
        prevCartItems.map(item => 
            item.id === id ? {...item, count: item.count - 1} : item
        ).filter(item => item.count !== 0)
    )
  }

  const handleDeleteCart = (id: number) => {
    setCartItems(prevCartItems => 
        prevCartItems.filter(item => item.id !== id)
    )
  }

  return (
    <CartContext.Provider value={{ 
        cartItems, 
        handleAddToCart,
        isCartExpanded,
        setIsCartExpanded,
        handleIncreaseCart,
        handleDecreaseCart,
        handleDeleteCart
    }}>
      {children}
    </CartContext.Provider>
  );
};