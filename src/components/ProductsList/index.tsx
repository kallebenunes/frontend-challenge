import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Product } from "../../types/components/product";
import searchProducts from "../../api/searchProducts";
import ProductCard from "../ProductCard";

import "./styles.scss";

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
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
