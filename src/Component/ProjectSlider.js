import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectSlider() {
  return (
    <>
      <div>
      <Swiper
      navigation={true}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide>
        <img src={require('../assets/images/slider-images/slider-image.png')} className='w-full' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../assets/images/slider-images/slider-image.png')} className='w-full' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../assets/images/slider-images/slider-image.png')} className='w-full' />
      </SwiperSlide>
    </Swiper>
      </div>
    </>
  );
}
