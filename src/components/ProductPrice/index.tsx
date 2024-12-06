import { Installment } from "../../types/components/product";
import { formatPrice } from "../../utils/formatPrice";
import "./styles.scss";

type ProductPriceProps = {
  priceDefinitions: {
    price: number;
    listPrice: number | null;
    installments: Installment[];
  };
};
export default function ProductPrice({
  priceDefinitions: { installments, listPrice, price },
}: ProductPriceProps) {
  return (
    <div className="product__price">
      {listPrice && (
        <span className="product__price-list">
          {" "}
          de {formatPrice(listPrice)}
        </span>
      )}
      <span className="product__price-selling">por {formatPrice(price)}</span>
      {installments.length > 0 && (
        <div className="product__price-installments">
          ou em
          <span className="product__price-installments-quantity">
            {" "}
            {installments[0].quantity}
          </span>{" "}
          de{" "}
          <span className="product__price-installments-value">
            {formatPrice(installments[0].value)}
          </span>
        </div>
      )}
    </div>
  );
}
