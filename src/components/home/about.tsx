import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SITE, yearsInMarket } from "@/lib/site";
import styles from "./about.module.css";

const POINTS = [
  "Especialistas no seu nicho, não um sistema genérico",
  "Contador tributarista e analistas ao lado da equipe de TI",
  "Sede própria em Cuiabá e clientes em 13 estados",
];

/** 4. Quem está por trás — pessoas reais, sem repetir os números do topo. */
export function AboutTeaser() {
  return (
    <section className="section">
      <div className={`container ${styles.grid}`}>
        <div className={styles.visual} data-reveal="left">
          <div className={styles.frame}>
            <Image
              src="/assets/images/quem-somos.png"
              alt="Fundadores da MCN Software"
              fill
              sizes="(max-width: 960px) 90vw, 500px"
              className={styles.img}
            />
          </div>
          <div className={styles.badge}>
            <strong>{yearsInMarket()}</strong>
            <span>
              anos desde
              <br />
              {SITE.foundedYear}
            </span>
          </div>
        </div>

        <div className={styles.copy} data-reveal>
          <span className="eyebrow">Quem somos</span>
          <h2 className="h2">
            Gente que conhece a <span className="text-gradient">rotina da sua loja</span>
          </h2>
          <p className="lead">
            A MCN nasceu em Cuiabá para resolver a gestão de quem vende material de construção,
            auto peças e distribuição. Até hoje, cada funcionalidade parte do dia a dia real dos
            nossos clientes.
          </p>

          <ul className={styles.points}>
            {POINTS.map((p) => (
              <li key={p}>
                <span>
                  <Check size={14} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <Link href="/sobre" className="link-arrow">
            Conheça nossa história <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
