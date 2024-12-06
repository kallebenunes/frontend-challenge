import useCart from "../../hooks/useCart";
import { formatPrice } from "../../utils/formatPrice";
import Image from "../Image";

export default function Minicart() {
  const { cartTotalQuantity, cartProductList } = useCart();
  return (
    <section className="minicart">
      <div className="minicart__container">
        {cartTotalQuantity > 0 ? (
          cartProductList.map((product) => (
            <li key={product.productId}>
              <h2>{product.productName}</h2>
              <div>
                <Image
                  width="150"
                  height="150"
                  alt={product.productName}
                  src={product.imageUrl}
                  loading="lazy"
                  fetchPriority="auto"
                />
                <span>
                  {product.quantity} x{" "}
                  {formatPrice(product.price * product.quantity)}
                </span>
                {product.listPrice && (
                  <span>
                    {formatPrice(product.listPrice * product.quantity)}
                  </span>
                )}
              </div>
            </li>
          ))
        ) : (
          <h3>Carrinho vazio</h3>
        )}
      </div>
    </section>
  );
}
