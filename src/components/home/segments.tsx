import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { iconFor } from "@/lib/icons";
import { parseDescription, splitTitle, truncate } from "@/lib/content";
import type { ObjectProduct } from "@/utils/product.type";
import styles from "./segments.module.css";

/** 1. Para quem é — um card por solução do Cosmic, todos com o mesmo peso visual. */
export function Segments({ products }: { products: ObjectProduct[] }) {
  if (!products.length) return null;

  const ordered = [...products].sort(
    (a, b) =>
      parseDescription(b.metadata?.descricao).modules.length -
      parseDescription(a.metadata?.descricao).modules.length
  );

  return (
    <section className="section" id="solucoes">
      <div className="container">
        <div className={styles.heading}>
          <header className={`section-head ${styles.intro}`} data-reveal>
            <span className="eyebrow">Para o seu segmento</span>
            <h2>
              Um sistema feito para o <span className="text-gradient">seu tipo de loja</span>
            </h2>
            <p>
              Escolha o seu ramo e veja os módulos pensados para a rotina dele — do balcão ao
              fiscal.
            </p>
          </header>

          <div className={styles.illustration} aria-hidden="true" data-reveal>
            <Image
              src="/assets/images/home/segmentos-lojas.webp"
              alt=""
              width={768}
              height={512}
              sizes="(max-width: 800px) 220px, 320px"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.grid}>
          {ordered.map((p, i) => {
            const { main, sub } = splitTitle(p.title);
            const parsed = parseDescription(p.metadata?.descricao);
            const Icon = iconFor(p.slug, p.title);
            const text = sub || parsed.paragraphs.join(" ");

            return (
              <Link
                key={p.slug}
                href={`/product/${p.slug}`}
                className={styles.card}
                data-reveal
                style={{ "--d": `${(i % 3) * 80}ms` } as React.CSSProperties}
              >
                <div className={styles.top}>
                  <span className={styles.icon}>
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  {parsed.modules.length > 0 ? (
                    <span className={styles.count}>{parsed.modules.length} módulos</span>
                  ) : null}
                </div>
                <h3>{main}</h3>
                <p>{truncate(text, 96)}</p>
                <span className={styles.link}>
                  Ver solução <ArrowRight size={16} />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
