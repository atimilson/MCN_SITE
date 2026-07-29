import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/hero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Conheça a MCN Sistemas: referência em software para materiais de construção, auto peças e distribuidoras desde 2002.",
};

export default function Sobre() {
  return (
    <>
      <Hero
        title="Sobre nós"
        eyebrow="MCN Sistemas"
        banner="/assets/images/banner-sobre.jpg"
      />

      <section className={styles.history}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.imageWrap}>
              <Image
                src="/assets/images/quem-somos.png"
                alt="Equipe e história da MCN Sistemas"
                quality={100}
                priority
                width={560}
                height={560}
                className="image-about img-fluid"
              />
            </div>
            <div className={styles.content}>
              <h2>Nossa história</h2>
              <p>
                A MCN Sistemas é referência em software de qualidade. Desde 2002
                no mercado, conta com mais de 500 clientes e atua em diversos
                estados: MT, MS, GO, RO, PA, AC, DF, ES, MG, PR, MA, PI e RR.
              </p>
              <p>
                Nosso segmento é materiais para construção, auto peças,
                distribuidora, ferragens, acabamentos e lojas de tintas. As
                funcionalidades são específicas para esse nicho, com tecnologia
                preparada para o gerenciamento empresarial com eficiência.
              </p>
              <p>
                Contamos com equipe de TI capacitada e profissionais como
                contador tributarista, analistas de mercado e administrador —
                unindo tecnologia e análise inteligente para o melhor controle
                fiscal.
              </p>
              <p>
                Ter o controle da sua empresa nunca foi tão fácil. Entre em
                contato e solicite uma visita técnica — a MCN está pronta para
                atender.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mvv}>
        <div className="container">
          <h2 className="section-title">Missão, visão e valores</h2>
          <div className="section-underline" />
          <div className={styles.cards}>
            <article className={styles.card} data-aos="fade-up">
              <div className={styles.badge}>01</div>
              <h3>Missão</h3>
              <p>
                Desenvolver as melhores e mais completas soluções em software,
                facilitando a vida dos nossos clientes.
              </p>
            </article>
            <article
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className={styles.badge}>02</div>
              <h3>Visão</h3>
              <p>
                Ser uma empresa de software reconhecida e respeitada dentro do
                segmento em que atuamos.
              </p>
            </article>
            <article
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.badge}>03</div>
              <h3>Valores</h3>
              <p>
                Qualidade dos nossos serviços e o compromisso com clientes e
                colaboradores.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
