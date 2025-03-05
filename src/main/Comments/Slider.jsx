import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import "../styles/Comments.css"
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ComponentMessage from "./ComponentMessage"
export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={300}
      slidesPerView={2}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true
      }}
      pagination={{ clickable: false }}
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
        <div className='swiper-button-next slider-arrow'>
          &#8594;
        </div>

      </div>
    </Swiper>
  )
}
