import { Swiper, SwiperSlide } from "swiper/react";
import Image from "../Image";
import "./styles.scss";
import { Navigation, Pagination } from "swiper/modules";

type BannerListItem = {
  title: string;
  subtitle: string;
  imageUrl: string;
};
type BannersListProp = {
  bannersListData: BannerListItem[];
};

export default function BannersList({ bannersListData }: BannersListProp) {
  return (
    <section className="banners">
      <div className="banners__container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
        >
          {bannersListData.map((bannerData, index) => (
            <SwiperSlide key={index}>
              <Image
                width={"100%"}
                height={"auto"}
                alt=""
                loading={index == 0 ? "eager" : "lazy"}
                src={bannerData.imageUrl}
                fetchPriority={index == 0 ? "high" : "low"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
