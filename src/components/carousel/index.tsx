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


export function Carousel({ object }: HomeProps) {

    return (
        <>
            <Swiper
                modules={[Autoplay, EffectFade, Parallax, Navigation]}
                slidesPerView={1}
                pagination={{ clickable: true }}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={true}
            >
                {object.metadata.slider?.map((banner) => (
                    <SwiperSlide key={banner.text}>
                        <Image src={banner.image.url} alt={banner.text} width={1920} height={600} className='img-fluid' />
                    </SwiperSlide>
                ))}


            </Swiper >

        </>
    )
}