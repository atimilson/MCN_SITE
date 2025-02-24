"use client"
import React from 'react';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

const InstagramFeed = () => {
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

            <div className="instagram-feed">
                <script
                    async
                    src="https://www.instagram.com/embed.js"
                ></script>
                <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/mcnsistemas/"
                    data-instgrm-version="14"
                    style={{
                        background: '#FFF',
                        border: 0,
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '800px',
                        minWidth: '600px',
                        padding: 0,
                        width: 'calc(100% - 2px)'
                    }}
                >
                </blockquote>
            </div>

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
                }
            `}</style>
        </div>
    );
};

export default InstagramFeed;
