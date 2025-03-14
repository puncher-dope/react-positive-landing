import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import "./Comments.css"
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { EffectCoverflow } from 'swiper/react';

import ComponentMessage from "./ComponentMessage"
export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      centeredSlides={true}
      // effect={'coverflow'}
      spaceBetween={300}
      slidesPerView={2}
      // EffectCoverflow={{
      //   rotate: 0,
      //   stretch: 0,
      //   depth: 100,
      //   modifier: 2,
      // }}
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{
        // el: '.swiper-pagination',
        clickable: false,
      }}
    >
      <SwiperSlide><ComponentMessage /></SwiperSlide>
      <SwiperSlide><ComponentMessage /></SwiperSlide>
      <SwiperSlide><ComponentMessage /></SwiperSlide>
      <SwiperSlide><ComponentMessage /></SwiperSlide>
      <SwiperSlide><ComponentMessage /></SwiperSlide>
      <SwiperSlide><ComponentMessage /></SwiperSlide>

      <div className='slider-controller'>
        <div className='swiper-button-prev slider-arrow'>
          &#8592;
        </div>
        {/* <div className='swiper-pagination' /> */}
        <div className='swiper-button-next slider-arrow'>
          &#8594;
        </div>
      </div>
    </Swiper>
  )
}
