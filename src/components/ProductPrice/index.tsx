import { Installment } from "../../types/components/product";
import { formatPrice } from "../../utils/formatPrice";

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
      <span className="product__price-selling">{formatPrice(price)}</span>
      {listPrice && (
        <span className="product__price-list">{formatPrice(listPrice)}</span>
      )}
      {installments.length > 0 && (
        <div className="prodcut__installments">
          ou em
          <span className="prodcut__installments-quantity">
            {installments[0].quantity}
          </span>{" "}
          de{" "}
          <span className="prodcut__installments-value">
            {formatPrice(installments[0].value)}
          </span>
        </div>
      )}
    </div>
  );
}
