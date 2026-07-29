"use client";

import {
  BrickWall,
  Truck,
  Car,
  Paintbrush,
  Wrench,
  Store,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

const segments = [
  {
    id: "construcao",
    icon: BrickWall,
    title: "Materiais para Construção",
    tagline: "Venda e gestão no ritmo da obra",
    description:
      "Funcionalidades específicas para lojas de materiais: venda ágil no balcão, controle de estoque e processos pensados para o dia a dia do segmento.",
    features: [
      "PDV rápido e intuitivo",
      "Controle de estoque e compras",
      "Gestão fiscal integrada",
      "Relatórios gerenciais",
    ],
    image: "/assets/images/construcao.gif",
    accent: "blue",
    delay: 100,
  },
  {
    id: "distribuidora",
    icon: Truck,
    title: "Distribuidora",
    tagline: "Atacado com fluxo seguro",
    description:
      "Fluxo seguro e ágil para atacado: vendas simplificadas, expedição organizada e entrega rápida com rastreabilidade do pedido.",
    features: [
      "Pedido e expedição ágeis",
      "Múltiplos canais de venda",
      "Controle de lotes e rotas",
      "Integração com logística",
    ],
    image: "/assets/images/distribuidora.gif",
    accent: "navy",
    delay: 200,
  },
  {
    id: "autopecas",
    icon: Car,
    title: "Auto Peças",
    tagline: "Ritmo intenso, sistema na medida",
    description:
      "Sistema centralizado para o ritmo do comércio de auto peças: busca rápida de itens, multi-estoques e funções específicas do setor.",
    features: [
      "Busca rápida de peças",
      "Catálogo e equivalências",
      "Estoque multi-loja",
      "Venda no balcão e delivery",
    ],
    image: "/assets/images/edson-auto-pecas.jpg",
    accent: "cyan",
    delay: 300,
  },
];

const moreSegments = [
  { icon: Wrench, label: "Ferragens" },
  { icon: Paintbrush, label: "Lojas de tintas" },
  { icon: Store, label: "Acabamentos" },
];

function whatsappHref(segmentTitle: string) {
  const text = `Olá! Gostaria de conhecer o sistema MCN para o segmento de ${segmentTitle}.`;
  return `https://wa.me/556592695937?text=${encodeURIComponent(text)}`;
}

export default function SegmentsSection() {
  return (
    <section className={styles.section} id="segmentos">
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Para o seu negócio</span>
          <h2 className={styles.title}>Segmentos atendidos</h2>
          <div className={styles.underline} />
          <p className={styles.lead}>
            ERP especializado nos setores em que a operação exige agilidade,
            controle fiscal e processos sob medida.
          </p>
        </div>

        <div className={styles.grid}>
          {segments.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className={`${styles.card} ${styles[`accent_${item.accent}`]}`}
                data-aos="fade-up"
                data-aos-delay={item.delay}
              >
                <div className={styles.media}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.mediaImage}
                    sizes="(max-width: 991px) 100vw, 33vw"
                    unoptimized={item.image.endsWith(".gif")}
                  />
                  <div className={styles.mediaOverlay} />
                  <div className={styles.iconBadge}>
                    <Icon size={26} strokeWidth={1.75} aria-hidden />
                  </div>
                </div>

                <div className={styles.body}>
                  <p className={styles.tagline}>{item.tagline}</p>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.description}</p>

                  <ul className={styles.features}>
                    {item.features.map((feature) => (
                      <li key={feature}>
                        <span className={styles.check} aria-hidden>
                          <Check size={14} strokeWidth={2.5} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={whatsappHref(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cta}
                  >
                    Quero para meu negócio
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.more} data-aos="fade-up" data-aos-delay="150">
          <p className={styles.moreLabel}>Também atendemos</p>
          <div className={styles.chips}>
            {moreSegments.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.label} className={styles.chip}>
                  <Icon size={16} strokeWidth={2} aria-hidden />
                  {item.label}
                </span>
              );
            })}
          </div>
          <Link href="/contato" className={styles.moreLink}>
            Fale com um consultor
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
