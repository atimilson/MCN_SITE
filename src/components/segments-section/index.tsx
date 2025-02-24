'use client'
import React from 'react';
import { BrickWall, Truck, Car } from "lucide-react";

const SegmentsSection = () => {
    return (
        <section className="segments-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title position-relative d-inline-block">
                        SEGMENTOS ATENDIDOS
                        <div className="title-underline"></div>
                    </h2>
                    <p className="text-muted mt-3">
                        Soluções especializadas para diferentes setores do mercado
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    <div className="col-md-4 col-lg-4">
                        <div className="segment-card h-100" data-aos="fade-up" data-aos-delay="150">
                            <div className="card-icon mb-4">
                                <BrickWall size={40} className="text-primary" />
                            </div>
                            <h3 className="segment-title">Materiais para Construção</h3>
                            <p className="segment-description">
                                O segmento de materiais para construção necessita de particularidades específicas em seus sistemas. 
                                A MCN traz funcionalidades de fácil manuseio que agilizam o processo de venda e gerenciamento da empresa.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4">
                        <div className="segment-card h-100" data-aos="fade-up" data-aos-delay="250">
                            <div className="card-icon mb-4">
                                <Truck size={40} className="text-primary" />
                            </div>
                            <h3 className="segment-title">Distribuidora</h3>
                            <p className="segment-description">
                                A Venda por atacado ou distribuidora necessita de um Fluxo seguro e ágil nas vendas. 
                                A MCN Sistemas tem o ERP ideal para esse segmento pois conta com um sistema de venda 
                                extremamente fácil, facilitando a entrega rápida pelo setor de expedição.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-4">
                        <div className="segment-card h-100" data-aos="fade-up" data-aos-delay="400">
                            <div className="card-icon mb-4">
                                <Car size={40} className="text-primary" />
                            </div>
                            <h3 className="segment-title">Auto Peças</h3>
                            <p className="segment-description">
                                A venda e distribuição de auto peças é um setor em constante movimentação e ter um sistema 
                                ágil e centralizado, além de conter funções específicas para o segmento, são extremamente necessários.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .segments-section {
                    background: #f8f9fa;
                }
                .section-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #21305c;
                    text-transform: uppercase;
                    margin-bottom: 1rem;
                }
                .title-underline {
                    height: 4px;
                    width: 60px;
                    background: #21305c;
                    margin: 0.5rem auto 0;
                }
                .segment-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 10px;
                    box-shadow: 0 0 20px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    text-align: center;
                }
                .segment-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 25px rgba(0,0,0,0.1);
                }
                .card-icon {
                    background: rgba(33, 48, 92, 0.1);
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                }
                .segment-title {
                    color: #21305c;
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }
                .segment-description {
                    color: #6c757d;
                    line-height: 1.6;
                    margin-bottom: 0;
                }
                @media (max-width: 768px) {
                    .section-title {
                        font-size: 2rem;
                    }
                    .segment-card {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default SegmentsSection; 