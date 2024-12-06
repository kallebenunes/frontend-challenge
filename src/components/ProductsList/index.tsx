import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import searchProducts from "../../api/searchProducts";
import { Product } from "../../types/components/product";
import Image from "../Image";
import "./styles.scss";
import ProductPrice from "../ProductPrice";

type ProductListProps = {
  query: {
    url: string;
  };
};

export function ProductsList({ query }: ProductListProps) {
  const [productListData, setProductListData] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      const searchProductsResult = await searchProducts(query.url);
      setProductListData(searchProductsResult);
    }

    fetchProducts();
  }, []);
  return (
    <section className="product-list">
      <div className="product-list__container">
        <Swiper
          slidesPerView={4}
          modules={[Pagination, Navigation]}
          pagination
          navigation
        >
          {productListData.map((product) => (
            <SwiperSlide key={product.productId}>
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
                  <button
                    data-product-id={product.productId}
                    className="product__add-to-car"
                  >
                    Comprar
                  </button>
                </div>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
