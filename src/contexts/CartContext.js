import { useState, useEffect, createContext } from "react";
import { Cart } from "@/api";

export const CartContext = createContext();

const cartCtrl = new Cart();

export function CartProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState(null);
  const [total, setTotal] = useState(cartCtrl.count());

  useEffect(() => {
    const response = cartCtrl.getAll();
    setCart(response);
  }, []);

  const addCart = (gameId) => {
    cartCtrl.add(gameId);
    refreshTotalCart();
  };

  const changeQuantityItem = (gameId, quantity) => {
    cartCtrl.changeQuantity(gameId, quantity);
    refreshTotalCart();
  };

  const deleteItem = (gameId) => {
    cartCtrl.delete(gameId);
    refreshTotalCart();
  }

  const refreshTotalCart = () => {
    setTotal(cartCtrl.count());
    setCart(cartCtrl.getAll());
  };

  const deleteAllItems = () => {
    cartCtrl.deleteAll();
    refreshTotalCart();
  }

  const data = {
    cart,
    addCart,
    total,
    deleteItem,
    deleteAllItems,
    changeQuantityItem,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
