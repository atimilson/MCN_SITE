import type { Metadata } from "next";
import Image from "next/image";
import {
  Calculator,
  ChartColumnIncreasing,
  CodeXml,
  Eye,
  Gem,
  Target,
  UserCog,
} from "lucide-react";
import { Hero } from "@/components/hero";
import CTASection from "@/components/cta-section";
import { CountUp } from "@/components/count-up";
import { getDataBlog, safe } from "@/utils/actions/get-data";
import type { BlogProps } from "@/utils/blog.type";
import { SITE, yearsInMarket } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre nós",
  description:
    "Conheça a MCN Software: referência em software para materiais de construção, auto peças e distribuidoras desde 2002, com mais de 500 clientes em 13 estados.",
};

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default async function Sobre() {
  const { objects: news } = await safe<BlogProps>(getDataBlog(), { objects: [] });
  const sede = news.find((n) => /sede/i.test(n.title) || /sede/i.test(n.slug));

  const mvv = [
    {
      icon: Target,
      title: "Missão",
      text: "Desenvolver as melhores e mais completas soluções em software, facilitando a vida dos nossos clientes.",
    },
    {
      icon: Eye,
      title: "Visão",
      text: "Ser uma empresa de software reconhecida e respeitada dentro do segmento em que atuamos.",
    },
    {
      icon: Gem,
      title: "Valores",
      text: "Qualidade dos nossos serviços e o compromisso com clientes e colaboradores.",
    },
  ];

  const team = [
    { icon: CodeXml, title: "Equipe de TI", text: "Desenvolvimento, implantação e suporte técnico." },
    { icon: Calculator, title: "Contador tributarista", text: "Regras fiscais sempre corretas no sistema." },
    { icon: ChartColumnIncreasing, title: "Analistas de mercado", text: "Funcionalidades guiadas pela realidade do setor." },
    { icon: UserCog, title: "Administração", text: "Gestão próxima de cada cliente e parceiro." },
  ];

  return (
    <main>
      <Hero
        eyebrow="Sobre a MCN"
        breadcrumbs={[{ label: "Sobre nós" }]}
        title={
          <>
            Mais de {yearsInMarket() - (yearsInMarket() % 5)} anos colocando empresas no{" "}
            <span className="text-gradient">controle</span>.
          </>
        }
        description="Software de qualidade, feito em Cuiabá para lojas de materiais de construção, auto peças, distribuidoras, ferragens, acabamentos e tintas de todo o Brasil."
        size="lg"
      />

      <section className={styles.statsWrap}>
        <div className="container">
          <div className={styles.stats} data-reveal>
            <div>
              <strong>
                <CountUp to={SITE.foundedYear} raw />
              </strong>
              <span>ano de fundação</span>
            </div>
            <div>
              <strong>
                <CountUp to={SITE.clients} prefix="+" />
              </strong>
              <span>empresas clientes</span>
            </div>
            <div>
              <strong>
                <CountUp to={SITE.states.length} />
              </strong>
              <span>estados atendidos</span>
            </div>
            <div>
              <strong>
                <CountUp to={1000} prefix="~" suffix=" m²" />
              </strong>
              <span>de sede própria</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.story}`}>
          <div className={styles.storyVisual} data-reveal="left">
            <div className={styles.photo}>
              <Image
                src="/assets/images/quem-somos.png"
                alt="Fundadores da MCN Software"
                fill
                sizes="(max-width: 960px) 90vw, 520px"
                className={styles.photoImg}
              />
            </div>
            <div className={styles.photoAccent} aria-hidden />
          </div>

          <div className={styles.storyText}>
            <span className="eyebrow" data-reveal>
              Nossa história
            </span>
            <h2 className="h2" data-reveal style={d(80)}>
              Tecnologia com <span className="text-gradient">análise inteligente</span>.
            </h2>
            <div className="prose" data-reveal style={d(160)}>
              <p>
                A MCN Software é referência em software de qualidade. Desde {SITE.foundedYear} no
                mercado, conta com mais de {SITE.clients} clientes e atua em{" "}
                {SITE.states.length} estados brasileiros.
              </p>
              <p>
                Nosso foco são materiais para construção, auto peças, distribuidoras, ferragens,
                acabamentos e lojas de tintas. As funcionalidades são específicas para esse
                nicho, com tecnologia preparada para o gerenciamento empresarial com eficiência.
              </p>
              <p>
                Ter o controle da sua empresa nunca foi tão fácil. Entre em contato e solicite uma
                visita técnica — a MCN está pronta para atender.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink grid-bg">
        <div className="container">
          <div className="section-head section-head--center" data-reveal>
            <span className="eyebrow">Propósito</span>
            <h2>
              Missão, visão e <span className="text-gradient">valores</span>
            </h2>
          </div>
          <div className={styles.mvv}>
            {mvv.map((item, i) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={styles.mvvCard} data-reveal style={d(i * 100)}>
                  <span className={styles.mvvNum}>0{i + 1}</span>
                  <span className={styles.mvvIcon}>
                    <Icon size={24} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center" data-reveal>
            <span className="eyebrow">Nosso time</span>
            <h2>
              Tecnologia e <span className="text-gradient">conhecimento fiscal</span> lado a lado
            </h2>
            <p>
              Unimos uma equipe de TI capacitada a profissionais que entendem de tributos, mercado
              e gestão — para entregar o melhor controle fiscal ao seu negócio.
            </p>
          </div>
          <div className={styles.team}>
            {team.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className={styles.teamCard} data-reveal style={d(i * 80)}>
                  <span>
                    <Icon size={22} />
                  </span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className={`container ${styles.reach}`}>
          <div data-reveal>
            <span className="eyebrow">Presença nacional</span>
            <h2 className="h2">
              De Cuiabá para <span className="text-gradient">{SITE.states.length} estados</span>
            </h2>
            <p className="lead">
              Clientes atendidos com implantação, treinamento e suporte remoto em todo o país.
            </p>
          </div>
          <ul className={styles.states}>
            {SITE.states.map((s, i) => (
              <li key={s.uf} data-reveal="zoom" style={d(i * 40)}>
                <strong>{s.uf}</strong>
                <span>{s.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {sede?.metadata?.capa?.url ? (
        <section className="section">
          <div className="container">
            <div className={styles.sede} data-reveal="zoom">
              <Image
                src={sede.metadata.capa.url}
                alt={sede.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1240px"
                className={styles.sedeImg}
              />
              <div className={`${styles.sedeText} on-dark`}>
                <span className="eyebrow">Nova sede</span>
                <h2>{sede.title}</h2>
                <p>
                  {SITE.address.street}, {SITE.address.city}. Cerca de 1.000 m² com área de lazer,
                  espaço para refeições e estrutura completa para a nossa equipe.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <CTASection />
    </main>
  );
}
