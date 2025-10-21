'use client'

import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CTASection = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });

        if (contentRef.current) {
            contentRef.current.setAttribute('data-aos', 'fade-right');
        }
        if (buttonRef.current) {
            buttonRef.current.setAttribute('data-aos', 'fade-left');
        }
    }, []);

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/556592695937?text=${encodeURIComponent("Olá! Gostaria de mais informações sobre os sistemas MCN.")}`;
        window.open(url, '_blank');
      };

    return (
        <div className="background-blue position-relative py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 col-12">
                        <div className="cta-content" ref={contentRef}>
                            <h3 className="display-5 fw-bold text-white mb-3">
                                Construa com confiança!
                            </h3>
                            <p className="lead text-white mb-4">
                                Descubra como nossos softwares especializados em materiais de construção e autopeças podem impulsionar seu negócio.
                            </p>
                            <div className="cta-features text-white mb-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center mb-3">
                                            <span className="me-2">✓</span>
                                            <span>Gestão completa e integrada</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <span className="me-2">✓</span>
                                            <span>Suporte técnico especializado</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex align-items-center mb-3">
                                            <span className="me-2">✓</span>
                                            <span>Atualizações constantes</span>
                                        </div>
                                        <div className="d-flex align-items-center mb-3">
                                            <span className="me-2">✓</span>
                                            <span>Soluções personalizadas</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="cta-button text-center" ref={buttonRef}>
                            <a 
                                onClick={handleWhatsAppClick}
                                className="btn btn-light btn-lg px-4 py-3 shadow-sm fw-bold"
                            >
                                SOLICITE UM ORÇAMENTO
                                <span className="ms-2">→</span>
                            </a>
                            <p className="text-white-50 mt-3">
                                Resposta em até 24 horas
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .background-blue {
                    background: linear-gradient(135deg, #21305c 0%, #344789 100%);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                }
                .cta-content {
                    position: relative;
                    z-index: 1;
                }
                .btn-light {
                    transition: all 0.3s ease;
                    border: none;
                }
                .btn-light:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2) !important;
                    background-color: #ffffff;
                }
                .lead {
                    font-size: 1.1rem;
                    line-height: 1.6;
                }
                @media (max-width: 768px) {
                    .cta-button {
                        margin-top: 2rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default CTASection; 