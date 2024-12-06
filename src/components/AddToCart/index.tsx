import useCart from "../../hooks/useCart";
import { Product } from "../../types/components/product";
import "./styles.scss";

type AddToCartProps = {
  product: Product;
};

export default function AddToCart({ product }: AddToCartProps) {
  const { addProduct } = useCart();
  function handleClick() {
    addProduct(product);
  }
  return (
    <button
      onClick={handleClick}
      data-product-id={product.productId}
      className="product__add-to-cart"
    >
      Comprar
    </button>
  );
}
