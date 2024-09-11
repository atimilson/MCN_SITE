"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import {
    Autoplay,
    EffectFade,
    Parallax,
    Navigation,
} from "swiper/modules";
import Image from 'next/image';
import { HomeProps } from '@/utils/home.type';


export function Testimonials({ object }: HomeProps) {

    return (
        <>
            <Swiper
                modules={[Autoplay, EffectFade, Parallax, Navigation]}
                slidesPerView={2}
                pagination={{ clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    480: { slidesPerView: 2, spaceBetween: 30 },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={false}
            >
                {object.metadata.testimonials.map((item) => (
                    <SwiperSlide key={item.company}>
                        <div className='card shadow p-3 rounded'>
                            <div className='d-flex align-items-center'>
                                <Image src={item.image.url} alt='Slide banner' width={70} height={70} className='rounded-circle' />
                                <h6 className="card-title ms-3">{item.company}</h6>
                            </div>

                            <div className='card-body'>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    )
}