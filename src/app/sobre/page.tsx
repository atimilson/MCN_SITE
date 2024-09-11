import Image from "next/image";
import { Hero } from "@/components/hero";

export default function Sobre() {
    return (
        <>
            <Hero
                title="Sobre nós"
                banner="/assets/images/banner-sobre.jpg"

            />
            <section className="p-md-5 p-3">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 col-12">
                            <Image
                                src="/assets/images/quem-somos.png"
                                alt="Logo do site"
                                quality={100}
                                priority={true}
                                width={600}
                                height={600}
                                className="image-about img-fluid"
                            />
                        </div>
                        <div className="col-md-6 col-12 mt-4 mt-md-0">
                            <h2>Nossa História</h2>
                            <p className="mt-4 lh-lg">
                                A MCN Sistemas é referência em Software de qualidade, desde 2002 no mercado, hoje conta com mais de 500 clientes, atuando em grandes Estados: Mato Grosso (MT), Mato Grosso do Sul (MS), Goias (GO), Rondônia (RO),Pará (PA), Acre (AC), Distrito Federal (DF), Espirito Santo (ES), Minas Gerais (MG), Paraná (PR), Maranhão (MA), Piauí (PI), Roraíma (RR).
                            </p>
                            <p className="mt-4 lh-lg">
                                Seu seguimento é em materiais para construção, auto peças, distribuidora, ferragens, acabamentos e lojas de tintas. Suas funcionalidades são especificas para atender esse nicho de empreendimento. O sistema possui tecnologia de primeira e atende com eficiência e rapidez o processo de gerenciamento empresarial.
                            </p>
                            <p className="mt-4 lh-lg">
                                Contamos com uma equipe de TI altamente capacitada, bem como um time forte de colaboradores que agregam grandes profissionais como: Contador Tributarista, Analistas de Mercado e Administrador, assim garantindo não só uma tecnologia de ponta, mas também análise inteligente para o melhor controle fiscal.
                            </p>
                            <p className="mt-4 lh-lg">
                                Ter o controle da sua empresa nunca foi tão fácil! Entre em contato com nossa equipe, e solicite uma visita técnica, a MCN está pronta para lhe atender.
                            </p>
                        </div>

                    </div>

                </div>

            </section>
            <section className="bg-light p-md-5 p-3">
                <div className="container ">
                    <h2 className="section-title mb-5">MISSÃO, VISÃO e VALORES</h2>
                    <div className="row gap-4 d-flex justify-content-center">
                        <div className="col-md-3 col-12 shadow  p-3" data-aos="flip-left">
                            <h3 className="section-subtitle">Missão</h3>
                            <p>Desenvolver as melhores e mais completas soluções em software, facilitando a vida dos nossos clientes.</p>
                        </div>
                        <div className="col-md-3 col-12 shadow p-3" data-aos="flip-up">
                            <h3 className="section-subtitle">Visão</h3>
                            <p>Ser uma empresa de Software reconhecida e respeitada dentro do segmento que atuamos.</p>
                        </div>
                        <div className="col-md-3 col-12 shadow p-3" data-aos="flip-right">
                            <h3 className="section-subtitle">Valores</h3>
                            <p>Qualidade dos nossos serviços, e o compromisso com nossos clientes e colaboradores.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


