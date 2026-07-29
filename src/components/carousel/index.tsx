"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.css";

export function Carousel({ object }: HomeProps) {
  const slides = object?.metadata?.slider ?? [];

  if (!slides.length) return null;

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        effect="fade"
        pagination={{ clickable: true }}
        navigation
        loop={slides.length > 1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {slides.map((banner) => (
          <SwiperSlide key={banner.text || banner.image.url}>
            <div className={styles.slide}>
              <Image
                src={banner.image.url}
                alt={banner.text || "Banner MCN Sistemas"}
                fill
                priority
                className={styles.image}
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
