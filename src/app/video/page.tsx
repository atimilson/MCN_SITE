'use client'
import { useEffect, useState } from 'react';
import { getDataCategoriasvideo } from '@/utils/actions/get-data';
import { videoProps } from '@/utils/video.type';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Videos() {
    const [categories, setCategories] = useState<videoProps | null>(null);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const data = await getDataCategoriasvideo();
                setCategories(data);
            } catch (error) {
                console.error("Erro ao buscar vídeos:", error);
            }
        }
        fetchVideos();
    }, []);

    const getVideoId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Vídeos</h1>
            <div className="text-center mb-4">
                <a
                    href="https://www.youtube.com/@McnSoftware1731"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-danger"
                >
                    Visite nosso canal no YouTube
                </a>
            </div>

            {categories?.objects.map((category) => (
                <div key={category.slug} className="mb-5">
                    <h2 className="mb-4 pb-2 border-bottom">{category.metadata.category_name}</h2>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                      
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        className="mySwiper"
                    >
                        {category.metadata.links.map((video, index) => {
                            const videoId = getVideoId(video.url);
                            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                            
                            return (
                                <SwiperSlide key={index}>
                                    <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                                        <div className="card-body p-0">
                                            <h5 className="card-title p-3 m-0 bg-light">
                                                {video.link_title}
                                            </h5>
                                            <div className="embed-responsive embed-responsive-16by9">
                                                <iframe
                                                    className="embed-responsive-item"
                                                    src={embedUrl}
                                                    width="100%"
                                                    height="300"
                                                    allowFullScreen
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            ))}

            <style jsx global>{`
                .swiper {
                    padding: 20px 0 40px;
                }
                .swiper-button-next,
                .swiper-button-prev {
                    color: #FF0000;
                }
                .swiper-pagination-bullet-active {
                    background: #FF0000;
                }
                .swiper-slide {
                    height: auto;
                }
            `}</style>
        </div>
    );
}
