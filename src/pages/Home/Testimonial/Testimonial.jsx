// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Testimonial = () => {
    return (
        <section className='testimonial-wrapper bg-testiImg bg-no-repeat bg-cover py-40 md:py-80 mt-10'>
            <div className="container mx-auto">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination]}
                    className="testimonial-slider"
                >
                    <SwiperSlide>
                        <div className="text-center py-4">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <h4 className='font-bold font-robo my-3'>John Duff - <span className='font-normal'>Web Developer</span></h4>
                            <p>Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center py-4">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <h4 className='font-bold font-robo my-3'>John Duff - <span className='font-normal'>Web Developer</span></h4>
                            <p>Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-center py-4">
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <h4 className='font-bold font-robo my-3'>John Duff - <span className='font-normal'>Web Developer</span></h4>
                            <p>Loram Maintenance of Way, Inc. is a railroad maintenance equipment and services provider. Loram provides track maintenance services to freight, passenger, and transit railroads worldwide, as well as sells and leases equipment which performs these functions</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>{/* container */}
        </section>/* testimonial-wrapper */
    );
};

export default Testimonial;