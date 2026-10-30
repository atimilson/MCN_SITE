import Image from "next/image";
import { Quote } from "lucide-react";
import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.css";

export function Testimonials({ object }: HomeProps) {
  const items = object?.metadata?.testimonials ?? [];
  if (!items.length) return null;

  return (
    <section className="section section--paper">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <span className="eyebrow">Depoimentos</span>
          <h2>
            Quem usa a MCN <span className="text-gradient">recomenda</span>
          </h2>
          <p>Lojistas que trocaram o improviso por controle de verdade.</p>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <figure
              key={item.company}
              className={styles.card}
              data-reveal
              style={{ "--d": `${i * 100}ms` } as React.CSSProperties}
            >
              <Quote className={styles.quoteIcon} size={28} aria-hidden />
              <blockquote className={styles.quote}>{item.description}</blockquote>
              <figcaption className={styles.author}>
                <Image
                  src={item.image.url}
                  alt={item.company}
                  width={52}
                  height={52}
                  className={styles.avatar}
                />
                <div>
                  <strong>{item.company}</strong>
                  <span>Cliente MCN</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
