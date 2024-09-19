// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, EffectCreative, Navigation } from 'swiper/modules';

import sliderImg01 from '../../../assets/home-slider-01.webp';
import sliderImg02 from '../../../assets/home-slider-02.webp';



const Slider = () => {
    return (

        <section className='slider'>
            <Swiper
                grabCursor={true}
                effect={'creative'}
                loop={true}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        origin: 'left center',
                        translate: ['-5%', 0, -200],
                        rotate: [0, 100, 0],
                    },
                    next: {
                        origin: 'right center',
                        translate: ['5%', 0, -200],
                        rotate: [0, -100, 0],
                    },
                }}
                navigation={true}
                modules={[EffectCreative, Autoplay, Navigation]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="mySwiper6"
            >
                <SwiperSlide>
                    <img src={sliderImg01} alt="Slide 1" className="slide-image" />
                    <div className="slide-container container mx-auto">
                        <div className="slider-content w-3/4 lg:w-2/4">
                            <small className='text-primary text-base font-medium'>Top Trending Products</small>
                            <h2 className='text-secondary font-mono text-3xl lg:text-7xl my-5'>Best Modern Wood Collection</h2>
                            <button className="cc-btn mt-3 hidden md:block">Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sliderImg02} alt="Slide 1" className="slide-image" />
                    <div className="slide-container container mx-auto">
                        <div className="slider-content w-3/4 lg:w-2/4">
                            <small className='text-primary text-base font-medium'>Top Trending Products</small>
                            <h2 className='text-secondary font-mono text-3xl lg:text-7xl my-5'>Best Modern Wood Collection</h2>
                            <button className="cc-btn mt-3 hidden md:block">Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </section>
    );
};

export default Slider;
