import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from "immer";
import { Product } from "../../types/components/product";

export interface CartProduct extends Product {
  quantity: number;
}

export interface CartContext {
  cartProductList: CartProduct[];
  addProduct: (product: Product) => CartProduct;
  removeProduct: (productId: number) => void;
  updateProductQuantity: (productId: number, quantity: number) => CartProduct;
  resetCart: () => void;
  cartTotalValue: number;
  cartTotalQuantity: number;
}

export const CartContext = createContext({} as CartContext);

interface CartProviderProps {
  children: ReactNode;
}

const CART_STORAGE_KEY = "cartProducts";

export function CartProvider({ children }: CartProviderProps) {
  const [cartProductList, setCartProductList] = useState<CartProduct[]>(() => {
    // Retrieve the cart from localStorage on initial load
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [cartTotalValue, setCartTotalValue] = useState(0);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  // Update localStorage whenever cartProductList changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartProductList));
  }, [cartProductList]);

  function updateProductQuantity(productId: number, quantity: number) {
    const currentProductIndex = cartProductList.findIndex(
      (product) => product.productId === productId
    );
    const newProduct = {
      ...cartProductList[currentProductIndex],
      quantity,
    };

    const newProductList = produce(cartProductList, (draft) => {
      draft.splice(currentProductIndex, 1, newProduct);
    });

    setCartProductList(newProductList);

    return newProduct;
  }

  function addProduct(product: Product) {
    const productAlreadyOnCart = cartProductList.find(
      (currentProduct) => currentProduct.productId === product.productId
    );

    if (productAlreadyOnCart) {
      return updateProductQuantity(
        productAlreadyOnCart.productId,
        productAlreadyOnCart.quantity + 1
      );
    }

    const cartProduct: CartProduct = {
      ...product,
      quantity: 1,
    };
    setCartProductList([...cartProductList, cartProduct]);

    return cartProduct;
  }

  function removeProduct(productId: number) {
    const newProductList = cartProductList.filter(
      (product) => !(product.productId === productId)
    );
    setCartProductList(newProductList);
  }

  function resetCart() {
    setCartProductList([]);
  }

  useEffect(() => {
    setCartTotalValue(
      cartProductList.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      )
    );

    setCartTotalQuantity(
      cartProductList.reduce((acc, product) => acc + product.quantity, 0)
    );
  }, [cartProductList]);

  const cartContextValue: CartContext = {
    cartProductList,
    addProduct,
    removeProduct,
    updateProductQuantity,
    resetCart,
    cartTotalValue,
    cartTotalQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
