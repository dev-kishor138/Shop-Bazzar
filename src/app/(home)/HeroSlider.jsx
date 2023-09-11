

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay } from 'swiper'


import 'swiper/css/bundle';

const HeroSlider = () => {
    return (
        <div className='main-slider'>
            <Swiper
                slidesPerView={1}
                loop
                navigation
                effect="fade"
                modules={[Navigation, EffectFade, Autoplay]}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};

export default HeroSlider;