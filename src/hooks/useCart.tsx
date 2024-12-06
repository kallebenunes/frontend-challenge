import { CartContext } from "./../contexts/CartContex";
import { useContext } from "react";

function useCart() {
  const context = useContext(CartContext);

  return context;
}

export default useCart;
