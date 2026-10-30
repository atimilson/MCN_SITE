import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./styles.module.css";

type Crumb = { href?: string; label: string };

interface HeroProps {
  title: React.ReactNode;
  eyebrow?: string;
  description?: React.ReactNode;
  /** Imagem de fundo opcional (fica sutil, sob o gradiente) */
  banner?: string;
  breadcrumbs?: Crumb[];
  children?: React.ReactNode;
  /** Conteúdo à direita (ex.: imagem do produto) */
  aside?: React.ReactNode;
  size?: "md" | "lg";
}

export function Hero({
  title,
  eyebrow,
  description,
  banner,
  breadcrumbs,
  children,
  aside,
  size = "md",
}: HeroProps) {
  return (
    <section
      className={`${styles.hero} ${size === "lg" ? styles.lg : ""} ${aside ? styles.withAside : ""} grid-bg on-dark`}
    >
      {banner ? (
        <div className={styles.bg} aria-hidden>
          <Image src={banner} alt="" fill priority sizes="100vw" className={styles.bgImg} />
        </div>
      ) : null}
      <div className={styles.orb} aria-hidden />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          {breadcrumbs?.length ? (
            <nav aria-label="Você está em" className={styles.crumbs} data-reveal>
              <Link href="/">Início</Link>
              {breadcrumbs.map((c) => (
                <span key={c.label}>
                  <ChevronRight size={14} />
                  {c.href ? <Link href={c.href}>{c.label}</Link> : <em>{c.label}</em>}
                </span>
              ))}
            </nav>
          ) : null}
          {eyebrow ? (
            <span className="eyebrow" data-reveal>
              {eyebrow}
            </span>
          ) : null}
          <h1 className={styles.title} data-reveal style={{ "--d": "80ms" } as React.CSSProperties}>
            {title}
          </h1>
          {description ? (
            <div className={styles.desc} data-reveal style={{ "--d": "160ms" } as React.CSSProperties}>
              {description}
            </div>
          ) : null}
          {children ? (
            <div className={styles.extra} data-reveal style={{ "--d": "240ms" } as React.CSSProperties}>
              {children}
            </div>
          ) : null}
        </div>
        {aside ? (
          <div className={styles.aside} data-reveal="zoom" style={{ "--d": "160ms" } as React.CSSProperties}>
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}
