import "./styles.scss";

type AddToCartProps = {
  productId: number;
};

export default function AddToCart({ productId }: AddToCartProps) {
  return (
    <button data-product-id={productId} className="product__add-to-cart">
      Comprar
    </button>
  );
}
