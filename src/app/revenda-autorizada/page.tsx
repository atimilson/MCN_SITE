import type { Metadata } from "next";
import { BadgeCheck, Handshake, Headphones, Rocket } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Hero } from "@/components/hero";
import { Revenda } from "@/components/revenda";
import CTASection from "@/components/cta-section";
import { getDataRevenda, safe } from "@/utils/actions/get-data";
import type { RevendaProps } from "@/utils/revenda";
import { waLink } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Revendas autorizadas",
  description: "Parceiros e revendas autorizadas da MCN Software. Seja um revendedor.",
};

export default async function RevendaAutorizada() {
  const data = await safe<RevendaProps>(getDataRevenda(), { objects: [] });
  const total = data.objects.reduce((n, o) => n + (o.metadata?.revenda?.length ?? 0), 0);
  const partnerMsg = "Olá! Tenho interesse em ser uma revenda autorizada MCN.";

  const perks = [
    { icon: BadgeCheck, title: "Produto consolidado", text: "ERP com mais de 20 anos de mercado e +500 clientes." },
    { icon: Headphones, title: "Suporte da fábrica", text: "Retaguarda técnica e fiscal da equipe MCN." },
    { icon: Rocket, title: "Nichos com demanda", text: "Construção, auto peças e distribuição em todo o país." },
  ];

  return (
    <main>
      <Hero
        eyebrow="Parceiros"
        breadcrumbs={[{ label: "Revendas autorizadas" }]}
        title={
          <>
            Revendas <span className="text-gradient">autorizadas</span>
          </>
        }
        description="Empresas parceiras credenciadas para comercializar, implantar e atender o sistema MCN na sua região."
      >
        <a href={waLink(partnerMsg)} target="_blank" rel="noopener noreferrer" className="btn btn--glass">
          <Handshake size={18} /> Quero ser um parceiro
        </a>
      </Hero>

      <section className="section section--paper">
        <div className="container">
          {total > 0 ? (
            <Revenda objects={data.objects} />
          ) : (
            <div className={styles.empty} data-reveal>
              <span className={styles.emptyIcon}>
                <Handshake size={28} />
              </span>
              <h2>Em breve, novos parceiros por aqui</h2>
              <p>
                Ainda não há revendas listadas. Enquanto isso, a própria MCN atende você
                diretamente — ou venha ser o nosso parceiro na sua região.
              </p>
              <a href={waLink(partnerMsg)} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                <FaWhatsapp size={18} /> Falar sobre parceria
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center" data-reveal>
            <span className="eyebrow">Seja um revendedor</span>
            <h2>
              Cresça com a <span className="text-gradient">MCN</span>
            </h2>
            <p>Leve um ERP especializado para os clientes da sua região com o apoio de quem desenvolve.</p>
          </div>
          <div className={styles.perks}>
            {perks.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={styles.perk} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                  <span>
                    <Icon size={22} />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Vamos ser <span className="text-gradient">parceiros</span>?
          </>
        }
        text="Conte sobre a sua empresa e a região onde atua. Nossa equipe comercial entra em contato."
        message={partnerMsg}
      />
    </main>
  );
}
