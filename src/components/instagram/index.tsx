"use client"
import React, { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

const InstagramFeed = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        
        // Carrega o script do Instagram de forma mais segura
        if (typeof window !== 'undefined' && !window.instgrm) {
            const script = document.createElement('script');
            script.src = 'https://www.instagram.com/embed.js';
            script.async = true;
            script.onload = () => {
                if (window.instgrm) {
                    window.instgrm.Embeds.process();
                }
            };
            document.body.appendChild(script);
        } else if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, []);

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

            {isClient && (
                <div className="instagram-feed">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink="https://www.instagram.com/mcnsistemas/reel/DLIstuRPPJC/"
                        data-instgrm-version="14"
                        style={{
                            background: '#FFF',
                            border: 0,
                            borderRadius: '3px',
                            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                            margin: '1px auto',
                            maxWidth: '540px',
                            minWidth: '326px',
                            padding: 0,
                            width: 'calc(100% - 2px)'
                        }}
                    >
                        <div style={{ padding: '16px' }}>
                            <Link 
                                href="https://www.instagram.com/mcnsistemas/" 
                                target="_blank"
                                style={{ 
                                    background: '#FFFFFF', 
                                    lineHeight: 0, 
                                    padding: '0 0', 
                                    textAlign: 'center', 
                                    textDecoration: 'none', 
                                    width: '100%' 
                                }}
                            >
                                Ver no Instagram
                            </Link>
                        </div>
                    </blockquote>
                </div>
            )}

            <div className="text-center mt-4">
                <Link 
                    href="https://www.instagram.com/mcnsistemas/" 
                    target="_blank" 
                    className="btn btn-outline-dark"
                >
                    <Instagram className="me-2" />
                    Siga-nos no Instagram
                </Link>
            </div>

            <style jsx>{`
                .instagram-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .instagram-feed {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                @media (max-width: 768px) {
                    .instagram-feed {
                        padding: 0;
                    }
                    .instagram-media {
                        min-width: 100% !important;
                    }
                }
            `}</style>
        </div>
    );
};

// Declaração de tipo para o Instagram embed
declare global {
    interface Window {
        instgrm?: {
            Embeds: {
                process: () => void;
            };
        };
    }
}

export default InstagramFeed;
