/* eslint-disable @next/next/no-img-element */
import style from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

type SliderProps = {};

export const Slider = ({}: SliderProps): JSX.Element => {
  const pagination = {
    clickable: true,
  };

  return (
    <div className={style.container}>
      <Swiper
        spaceBetween={160}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={pagination}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className={style.swiper}
      >
        <SwiperSlide className={style.slide}>
          <img src="/Slider/Image1.png" alt="1" className={style.image} />
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <img src="/Slider/Image2.png" alt="2" className={style.image} />
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <img src="/Slider/Image3.png" alt="3" className={style.image} />
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <img src="/Slider/Image4.png" alt="4" className={style.image} />
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <img src="/Slider/Image5.png" alt="5" className={style.image} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
