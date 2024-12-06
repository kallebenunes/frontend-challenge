import { Product } from "../../types/components/product";
import AddToCart from "../AddToCart";
import Image from "../Image";
import ProductPrice from "../ProductPrice";
import "./styles.scss";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <li className="product__card">
      <div className="product__card-stack">
        <Image
          width={300}
          height={300}
          loading="lazy"
          alt={product.productName}
          src={product.imageUrl}
          className="product__card-image"
          fetchPriority="auto"
        />
      </div>
      <div className="product__card-summary">
        <h2 className="product__card-name">{product.productName}</h2>
        <ProductPrice
          priceDefinitions={{
            price: product.price,
            listPrice: product.listPrice,
            installments: product.installments,
          }}
        />
        <AddToCart product={product} />
      </div>
    </li>
  );
}
