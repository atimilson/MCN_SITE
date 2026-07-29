"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.css";

type VideoLink = {
  url: string;
  link_title: string;
};

type Category = {
  slug: string;
  metadata: {
    category_name: string;
    links: VideoLink[];
  };
};

function getVideoId(url: string) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export function VideoGallery({ categories }: { categories: Category[] }) {
  if (!categories?.length) {
    return (
      <p className={styles.empty}>Nenhum vídeo disponível no momento.</p>
    );
  }

  return (
    <>
      {categories.map((category) => (
        <section key={category.slug} className={styles.category}>
          <h2 className={styles.categoryTitle}>
            {category.metadata.category_name}
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className={styles.swiper}
          >
            {category.metadata.links.map((video, index) => {
              const videoId = getVideoId(video.url);
              if (!videoId) return null;

              return (
                <SwiperSlide key={`${category.slug}-${index}`}>
                  <article className={styles.card}>
                    <h3 className={styles.cardTitle}>{video.link_title}</h3>
                    <iframe
                      className={styles.frame}
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={video.link_title}
                      allowFullScreen
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      ))}
    </>
  );
}
