"use client"
import React from 'react';
import { Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const SimpleInstagramFeed = () => {
    // Posts do Instagram (você pode adicionar URLs reais de imagens)
    const instagramPosts = [
        {
            id: 1,
            imageUrl: "/assets/images/i1.jpg", // Substitua pela imagem real
            postUrl: "https://www.instagram.com/mcnsistemas/",
            caption: "Descubra por que um ERP com BI pode ser O seu maior aliado nesse momento."
        },
        {
            id: 2,
            imageUrl: "/assets/images/i7.jpg", // Substitua pela imagem real
            postUrl: "https://www.instagram.com/mcnsistemas/",
            caption: "Com o aplicativo de contagem da MCN, você faz tudo direto pelo celular, com rapidez, precisão e integração automática."
        },
        {
            id: 3,
            imageUrl: "/assets/images/i3.jpg", // Substitua pela imagem real
            postUrl: "https://www.instagram.com/mcnsistemas/",
            caption: "Sua loja de decoração EE00 ESTÁ PRONTA PARA CRESCER?"
        },
        {
            id: 4,
            imageUrl: "/assets/images/i4.jpg", // Substitua pela imagem real
            postUrl: "https://www.instagram.com/mcnsistemas/",
            caption: "👉 Chegou a hora de evoluir, fale com a MCN e descubra como."
        },
        {
            id: 5,
            imageUrl: "/assets/images/i5.jpg", // Substitua pela imagem real
            postUrl: "https://www.instagram.com/mcnsistemas/",
            caption: "Você ainda esta está digitando a Chave PIX MANUALMENTE ?"
        },
        {
            id: 6,
            imageUrl: "/assets/images/i6.jpg", // Substitua pela imagem real
            postUrl: "https://www.instagram.com/mcnsistemas/",
            caption: "Com a MCN, você gerencia lotes e validades com facilidade e segurança."
        }
    ];

    return (
        <div className="instagram-container">
            <div className="text-center mb-4">
                <Link 
                    href="https://www.instagram.com/mcnsistemas/" 
                    target="_blank" 
                    className="text-decoration-none text-dark"
                >
                    <h3 className="d-flex align-items-center justify-content-center gap-2">
                        <Instagram size={24} />
                        @mcnsistemas
                    </h3>
                </Link>
            </div>

            <div className="instagram-grid">
                {instagramPosts.map((post) => (
                    <Link 
                        key={post.id}
                        href={post.postUrl} 
                        target="_blank"
                        className="instagram-post"
                    >
                        <div className="instagram-post-container">
                            <Image
                                src={post.imageUrl}
                                alt={post.caption}
                                width={300}
                                height={300}
                                className="instagram-image"
                                style={{width: '100%', height: '100%', objectFit: 'contain'}}
                                unoptimized={true}
                            />
                            <div className="instagram-overlay">
                                <Instagram size={30} color="white" />
                                <p className="instagram-caption">{post.caption}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="text-center mt-4">
                <Link 
                    href="https://www.instagram.com/mcnsistemas/" 
                    target="_blank" 
                    className="btn btn-outline-primary"
                >
                    <Instagram className="me-2" />
                    Ver mais no Instagram
                </Link>
            </div>

            <style jsx>{`
                .instagram-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1px;
                }
                .instagram-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 1px;
                    margin: auto;
                }
                .instagram-post {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                }
                .instagram-post-container {
                    position: relative;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
                    padding: 0px;
                }
                .instagram-post-container:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
                }
                .instagram-image {
                    width: 100%;
                    height: 300px;
                    object-fit: contain;
                    border-radius: 8px;
                }
                .instagram-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    border-radius: 8px;
                    padding: 20px;
                    text-align: center;
                }
                .instagram-post-container:hover .instagram-overlay {
                    opacity: 1;
                }
                .instagram-caption {
                    color: white;
                    font-size: 14px;
                    margin-top: 10px;
                    font-weight: 500;
                    text-align: center;
                }
                @media (max-width: 768px) {
                    .instagram-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 15px;
                    }
                    .instagram-image {
                        height: 200px;
                    }
                    .instagram-caption {
                        font-size: 12px;
                    }
                }
                @media (max-width: 480px) {
                    .instagram-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                    .instagram-image {
                        height: 300px;
                    }
                }
            `}</style>
        </div>
    );
};

export default SimpleInstagramFeed; 