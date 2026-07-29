"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.css";

export function Testimonials({ object }: HomeProps) {
  const items = object?.metadata?.testimonials ?? [];

  if (!items.length) return null;

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={20}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 24 },
        1100: { slidesPerView: 3, spaceBetween: 24 },
      }}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.company}>
          <article className={styles.card}>
            <div className={styles.header}>
              <Image
                src={item.image.url}
                alt={item.company}
                width={56}
                height={56}
                className={styles.avatar}
              />
              <h3 className={styles.company}>{item.company}</h3>
            </div>
            <span className={styles.quoteMark} aria-hidden>
              “
            </span>
            <p className={styles.quote}>{item.description}</p>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
