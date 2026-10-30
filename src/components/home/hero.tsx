import Image from "next/image";
import {
  ArrowRight,
  CircleCheck,
  Receipt,
  ScanBarcode,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CountUp } from "@/components/count-up";
import { SITE, waLink, yearsInMarket } from "@/lib/site";
import styles from "./hero.module.css";

type Props = {
  /** Screenshot do produto */
  screenshot?: string;
};

export function HomeHero({ screenshot = "/assets/images/erp-tela-vendas.png" }: Props) {
  const stats = [
    { value: SITE.foundedYear, label: "No mercado desde", raw: true },
    { value: SITE.clients, prefix: "+", label: "Empresas clientes" },
    { value: SITE.states.length, label: "Estados atendidos" },
    { value: 70, prefix: "+", label: "Marketplaces integrados" },
  ];

  return (
    <section className={`${styles.hero} grid-bg`}>
      <div className={styles.orbA} aria-hidden />
      <div className={styles.orbB} aria-hidden />
      <div className={styles.beam} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <div className={`pill-badge ${styles.badge}`} data-reveal>
            <span>{yearsInMarket()} anos</span>
            Tecnologia para o varejo e distribuição
          </div>

          <h1 className={styles.title} data-reveal style={{ "--d": "80ms" } as React.CSSProperties}>
            O ERP que coloca a sua loja no{" "}
            <span className={styles.gradient}>controle total.</span>
          </h1>

          <p className={styles.lead} data-reveal style={{ "--d": "160ms" } as React.CSSProperties}>
            Gestão especializada para <strong>materiais de construção</strong>,{" "}
            <strong>auto peças</strong> e <strong>distribuidoras</strong> — fiscal,
            estoque, BI e aplicativos integrados numa só plataforma.
          </p>

          <div className={styles.ctas} data-reveal style={{ "--d": "240ms" } as React.CSSProperties}>
            <a
              href={waLink("Olá! Quero agendar uma demonstração do sistema MCN.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg"
            >
              <FaWhatsapp size={19} />
              Agendar demonstração
            </a>
            <a href="#solucoes" className="btn btn--glass btn--lg">
              Ver soluções <ArrowRight size={18} className="arrow" />
            </a>
          </div>

          <ul className={styles.checks} data-reveal style={{ "--d": "320ms" } as React.CSSProperties}>
            <li>
              <CircleCheck size={16} /> Suporte especializado
            </li>
            <li>
              <CircleCheck size={16} /> Fiscal e TEF em dia
            </li>
            <li>
              <CircleCheck size={16} /> Apps integrados
            </li>
          </ul>
        </div>

        <div className={styles.visual} data-reveal="zoom" style={{ "--d": "200ms" } as React.CSSProperties}>
          <div className={styles.glow} aria-hidden />
          <div className={styles.window}>
            <div className={styles.windowBar}>
              <span />
              <span />
              <span />
              <div className={styles.url}>MCN ERP · Sistema de Gestão</div>
            </div>
            <div className={styles.screen}>
              {screenshot ? (
                <Image
                  src={screenshot}
                  alt="Tela de vendas do ERP MCN"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 680px"
                  quality={90}
                  className={styles.screenImg}
                />
              ) : (
                <div className={styles.screenFallback} />
              )}
              <div className={styles.screenFade} />
            </div>
          </div>

          <div className={`${styles.float} ${styles.floatA} glass`}>
            <span className={styles.floatIcon}>
              <Receipt size={18} />
            </span>
            <div>
              <strong>NF-e autorizada</strong>
              <small>SEFAZ · agora mesmo</small>
            </div>
          </div>

          <div className={`${styles.float} ${styles.floatB} glass`}>
            <span className={`${styles.floatIcon} ${styles.floatIconCyan}`}>
              <ScanBarcode size={18} />
            </span>
            <div>
              <strong>Estoque sincronizado</strong>
              <small>
                <i className={styles.live} /> contagem via app
              </small>
            </div>
          </div>

          <div className={`${styles.float} ${styles.floatC} glass`}>
            <span className={`${styles.floatIcon} ${styles.floatIconGreen}`}>
              <FaWhatsapp size={18} />
            </span>
            <div>
              <strong>Pedido enviado</strong>
              <small>direto pelo WhatsApp</small>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className={styles.stats}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={styles.stat}
              data-reveal
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
            >
              <dt>{s.label}</dt>
              <dd>
                <CountUp to={s.value} prefix={s.prefix} raw={s.raw} />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.marquee} aria-label="Estados atendidos">
        <div className={styles.track}>
          {[0, 1].map((dup) => (
            <ul key={dup} aria-hidden={dup === 1}>
              {SITE.states.map((st) => (
                <li key={st.uf}>
                  <b>{st.uf}</b> {st.name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
